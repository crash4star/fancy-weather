import SearchLanguage from './Search-language';
import TranslateRequest from './Translate-request';
import getCityInfo from './Get-city-info';
import Weather from '../../Components/Weather';
import Map from '../../Components/Map';
import loadBgImage from '../../Controllers/Options/loadBgImage';

function SearchCity(block, wrapper) {
    const searchInput = document.querySelector('#search-input');
    const searchBtn = document.querySelector('#search-bar-btn');

    function getSearch() {
        TranslateRequest(searchInput.value)
            .then(city => getCityInfo(city))
            .then(result => {
                block.delete();

                const weatherBlock = new Weather(`#${wrapper}`, result);
                weatherBlock.create();

                const mapBlock = new Map(`${wrapper}`, result, JSON.parse(localStorage.getItem('weather-info')));
                mapBlock.create();

                loadBgImage();
            });
    }

    document.addEventListener('keydown', (e) => {
        if (searchInput.value !== '' && e.code === 'Enter') {
            getSearch();
        } 
    });

    searchBtn.addEventListener('click', () => {
        if (searchInput.value !== '') {
            getSearch();
        } else {
            alert('Please type something')
        }
    });

    SearchLanguage();
}

export default SearchCity;