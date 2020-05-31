import updateUnits from '../Options/updateUnits';

function temperatureUnit() {
    const wrapper = document.querySelector('.header__options-bar--unit');
    const unitItems = document.querySelectorAll('.header__options-btn--unit');

    unitItems[0].classList.add('header__options-btn--unit-active');
    wrapper.addEventListener('click', (e) => {
        const curTarget  = e.target.closest('button');

        unitItems.forEach(item => {
            item.classList.remove('header__options-btn--unit-active');
        });
        
        curTarget.classList.add('header__options-btn--unit-active');

        const curTemperature = document.querySelector('.content__info-data-temperature');
        const feelsTemperature = document.querySelectorAll('.content__info-data-meteo-info-item');
        if (curTarget.getAttribute('id') === 'unit-c') {
            updateUnits([curTemperature, feelsTemperature[1]], 'c');
        } else {
            updateUnits([curTemperature, feelsTemperature[1]], 'f');
        }
    });
}

export default temperatureUnit;