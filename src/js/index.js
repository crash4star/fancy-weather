import '../css/style.css';
import '../css/style.scss';
import App from './app/Components/App';
import Block from './app/Components/Block';
import Header from './app/Components/Header';
import Weather from './app/Components/Weather';
import Map from './app/Components/Map';

import getLocation from './app/Controllers/Get-location';
import getCityInfo from './app/Controllers/Header/Get-city-info';
import SearchCity from './app/Controllers/Header/Search';
import temperatureUnit from './app/Controllers/Header/Temperature-unit';
import Clock from './app/Controllers/Options/Clock';
import updateBgImage from './app/Controllers/Header/updateBgImage';
import loadBgImage from './app/Controllers/Options/loadBgImage';
import { loading, loadingComplete } from './app/Controllers/Options/loading';

const fancyWeather = new App('root');

loading();
window.addEventListener('load', () => {
    getLocation()
        .then(data => {
            getCityInfo(data)
                .then(result => {
                    return new Promise((resolve, reject) => {
                        const header = new Header(`#${fancyWeather.root}`);
                        header.create();

                        const contentWrapper = new Block('div', 'content-wrapper', `#${fancyWeather.root}`, 'content-wrapper');
                        contentWrapper.create();

                        const weatherBlock = new Weather(`#${contentWrapper.id}`, result);
                        weatherBlock.create();

                        Clock();
                        temperatureUnit();
                        updateBgImage();

                        const mapBlock = new Map(`${contentWrapper.id}`, result, JSON.parse(localStorage.getItem('weather-info')));
                        mapBlock.create();

                        SearchCity(weatherBlock, contentWrapper.id);
                        resolve(true);
                    });
                }).then(() => {
                    loadBgImage();
                    loadingComplete();
                });
        });
});





