import '../css/style.css';
import '../css/style.scss';
import App from './app/Components/App';
import Block from './app/Components/Block';
import Header from './app/Components/Header';
import Weather from './app/Components/Weather';
import Map from './app/Components/Map';

import getLocation from './app/Controllers/Get-location';
import SearchCity from './app/Controllers/Header/Search';

const fancyWeather = new App('root');

window.addEventListener('load', () => {
    getLocation();
});

// const header = new Header(`#${fancyWeather.root}`);
// header.create();

// const contentWrapper = new Block('div', 'content-wrapper', `#${fancyWeather.root}`, 'content-wrapper');
// contentWrapper.create();

// const weatherBlock = new Weather(`#${contentWrapper.id}`);
// weatherBlock.create();

// const data = {
//     Latitude :{
//         x: 53,
//         y: 54
//     },
//     Longitude :{
//         x: 27,
//         y: 34
//     }
// };
// const mapBlock = new Map(`${contentWrapper.id}`, data);
// mapBlock.create();




// SearchCity();





