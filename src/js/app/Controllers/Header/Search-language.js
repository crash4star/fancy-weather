function SearchLanguage() {
    const languageMenu = document.querySelector('#drop-languages');
    const languageMenuDropdown = document.querySelector('.dropdown-menu');

    languageMenu.addEventListener('click', () => {
        languageMenuDropdown.classList.add('d-block');
        languageMenuDropdown.addEventListener('click', (e) => {
            const curTarget = e.target;
            languageMenu.textContent = curTarget.textContent;
            localStorage.setItem('lang', curTarget.textContent);
            languageMenuDropdown.classList.remove('d-block');
        });
    });
}

export default SearchLanguage;