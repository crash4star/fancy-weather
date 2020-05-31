function getFutureWeather() {
    const FUTURE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${localStorage.getItem('city')}&units=metric&APPID=a9ce39b9ddbf9d684cd7c232eabc2fca`;

    return new Promise((resolve, reject) => {
        fetch(FUTURE_WEATHER_URL)
            .then(res => res.json())
            .then(data => {
                const days = new Set();
                const daysArr = [];
                const futureTemperature = [];

                function nextDayString(next) {
                    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay() + next];
                }

                data.list.forEach((item, i) => {
                    if (i % 8 === 1) {
                        days.add(item);
                    }
                });

                days.forEach(item => {
                    daysArr.push(item);
                });

                daysArr.shift();
                daysArr.pop();

                daysArr.forEach(item => {
                    futureTemperature.push({ temperature: Math.round(item.main.temp), weatherIcon: item.weather[0].main });
                });

                futureTemperature.forEach((item, i) => {
                    item.day = nextDayString(i + 1);
                });

                localStorage.setItem('future', JSON.stringify(futureTemperature));

                resolve(true);
            });
    });
}

export default getFutureWeather;