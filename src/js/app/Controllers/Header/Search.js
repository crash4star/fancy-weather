import SearchLanguage from './Search-language';
import TranslateRequest from './Translate-request';
import getCityInfo from './Get-city-info';

function SearchCity() {
    const searchInput = document.querySelector('#search-input');
    const searchBtn = document.querySelector('#search-bar-btn');

    searchBtn.addEventListener('click', () => {
        TranslateRequest(searchInput.value)
            .then(city => getCityInfo(city));
    });

    SearchLanguage();
}

export default SearchCity;