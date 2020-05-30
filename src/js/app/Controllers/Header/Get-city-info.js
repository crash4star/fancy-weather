function getCityInfo(city) {
    const SEARCH_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9ce39b9ddbf9d684cd7c232eabc2fca`;

    fetch(SEARCH_URL)
        .then(res => res.json())
        .then(data => {
            const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
            const date = new Date().getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ][new Date().getMonth()];

            const cityInfo = {
                city: data.name,
                country: data.sys.country,
                date: `${weekDay} ${date} ${monthNames}`,
                temperature: Math.round(data.main.temp),
                info: data.weather[0].main,
                feels: Math.round(data.main.feels_like),
                windSpeed: Math.round(data.wind.speed),
                humidityInfo: Math.round(data.main.humidity),
                latitude: data.coord.lat,
                longitude: data.coord.lon,
            };

            localStorage.setItem('city-info', JSON.stringify(cityInfo));
        });
}

export default getCityInfo;