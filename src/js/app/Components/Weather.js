import Block from './Block';
import CityDate from '../Elements/City-date';
import TodayWeather from '../Elements/Today-weather';
import FutureWeather from '../Elements/Future-weather';
import getFutureWeather from '../Controllers/Weather/getFutureWeather';
class Weather extends Block {
    constructor(parent, dataMeteo) {
        super();
        this.parent = parent;
        this.dataMeteo = dataMeteo;
    }

    create() {
        const weatherBlock = new Block('div', 'content__info', `${this.parent}`, 'weather');
        weatherBlock.create();

        const weatherBlockHtml = document.querySelector(`.${weatherBlock.classStyle}`);
        const locationInfo = new CityDate(this.dataMeteo.city, this.dataMeteo.country, this.dataMeteo.date);
        weatherBlockHtml.append(locationInfo.create());

        const options = {
            temperature: this.dataMeteo.temperature,
            meteo: {
                'Weather': this.dataMeteo.info,
                'Feels like': `Feels like ${this.dataMeteo.feels}`,
                'Wind': `Wind ${this.dataMeteo.windSpeed}`,
                'Humidity': `Humidity ${this.dataMeteo.humidityInfo}`
            }
        };

        const todayWeather = new TodayWeather(options);
        weatherBlockHtml.append(todayWeather.create());

        getFutureWeather()
            .then(() => {
                const futureWeather = new FutureWeather(JSON.parse(localStorage.getItem('future')));
                weatherBlockHtml.append(futureWeather.create());
            });
    }

    getParent() {
        return this.parent;
    }

    delete() {
        const parentBlock = document.querySelector(`${this.parent}`);
        parentBlock.innerHTML = '';
    }
}

export default Weather;