class TodayWeather {
    constructor(options) {
        this.options = options;
    }

    create() {
        const todayWrapper = document.createElement('div');
        todayWrapper.className = 'content__info-data';

        const todayTemperature = document.createElement('h1');
        todayTemperature.className = 'content__info-data-temperature';
        todayTemperature.textContent = this.options.temperature;

        const todayContentWrapper = document.createElement('div');
        todayContentWrapper.className = 'content__info-data-meteo';

        const weatherIcon = document.createElement('div');
        weatherIcon.className = 'content__info-data-meteo-icon';

        const meteoWrapper = document.createElement('div');
        meteoWrapper.className = 'content__info-data-meteo-info';

        Object.values(this.options.meteo).forEach(item => {
            const itemParagraph = document.createElement('p');
            itemParagraph.className = 'content__info-data-meteo-info-item';
            itemParagraph.textContent = item;
            meteoWrapper.append(itemParagraph);
        });

        todayWrapper.append(todayTemperature);
        todayContentWrapper.append(weatherIcon);
        todayContentWrapper.append(meteoWrapper);
        todayWrapper.append(todayContentWrapper);

        return todayWrapper;
    }
}

export default TodayWeather;