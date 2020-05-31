function TranslatePage() {
    const currentLanguage = localStorage.getItem('lang');

    const changeLanguageElements = ['content__info-headline', 'content__info-today-item--date', 'content__info-data-meteo-info-item', 'content__info-future-day', 'content__location-data-text'];

    changeLanguageElements.forEach(item => {
        const block = document.querySelectorAll(`.${item}`);

        block.forEach(change => {
            const TRANASLATE_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${change.textContent}&lang=${currentLanguage.toLowerCase()}`;

            fetch(TRANASLATE_URL)
                .then(res => res.json())
                .then(data => {
                    change.textContent = data.text[0];
                });
        });
    });
}

export default TranslatePage;