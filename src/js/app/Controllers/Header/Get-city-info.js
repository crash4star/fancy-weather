function getCityInfo(city) {
    const SEARCH_URL = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=a9ce39b9ddbf9d684cd7c232eabc2fca`;
    return new Promise((resolve, reject) => {
        fetch(SEARCH_URL)
        .then(res => res.json())
        .then(data => {
            const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
            const date = new Date().getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ][new Date().getMonth()];

            const cityInfo = {
                city: data.list[0].name,
                country: data.list[0].sys.country,
                date: `${weekDay} ${date} ${monthNames}`,
                temperature: Math.round(data.list[0].main.temp),
                info: data.list[0].weather[0].description,
                icon: data.list[0].weather[0].icon,
                feels: Math.round(data.list[0].main.feels_like),
                windSpeed: Math.round(data.list[0].wind.speed),
                humidityInfo: Math.round(data.list[0].main.humidity),
                latitude: data.list[0].coord.lat,
                longitude: data.list[0].coord.lon,
            };

            localStorage.setItem('city', city);
            localStorage.setItem('weather-info', JSON.stringify(cityInfo));
            resolve(cityInfo);
        })
        .catch(err => alert('City not found'));
    });
}

export default getCityInfo;