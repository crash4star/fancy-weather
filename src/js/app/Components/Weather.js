import Block from './Block';
import CityDate from '../Elements/City-date';
import TodayWeather from '../Elements/Today-weather';
import FutureWeather from '../Elements/Future-weather';

class Weather extends Block {
    constructor(parent) {
        super();
        this.parent = parent;
    }

    create() {
        const weatherBlock = new Block('div', 'content__info', `${this.parent}`, 'weather');
        weatherBlock.create();

        const weatherBlockHtml = document.querySelector(`.${weatherBlock.classStyle}`);
        const locationInfo = new CityDate('Moscow', 'Russia', 'Mon 28 October', '17:23');
        weatherBlockHtml.append(locationInfo.create());

        const options = {
            temperature: 11,
            weatherIcon: 'rain',
            meteo: {
                'Weather': 'Overcast',
                'Feels like': 7,
                'Wind': 2,
                'Humidity': 60
            }
        };

        const todayWeather = new TodayWeather(options);
        weatherBlockHtml.append(todayWeather.create());


        const days = [
            {
                day: 'Tuesday',
                temperature: 7,
                weatherIcon: 'rain'
            },
            {
                day: 'Wednesday',
                temperature: 9,
                weatherIcon: 'sunny'
            },
            {
                day: 'Thursday',
                temperature: 13,
                weatherIcon: 'sunny'
            }
        ];

        const futureWeather = new FutureWeather(days);
        weatherBlockHtml.append(futureWeather.create());
    }
}

export default Weather;