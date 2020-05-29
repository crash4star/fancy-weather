import '../css/style.css';
import '../css/style.scss';
import App from './app/App';
import Header from './app/Components/Header';

const fancyWeather = new App('root');

const header = new Header(`#${fancyWeather.root}`);
header.elements();





