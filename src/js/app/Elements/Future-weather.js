class FutureWeather {
    constructor(days) {
        this.days = days;
    }

    create() {
        const wrapper = document.createElement('div');
        wrapper.className = 'content__info-future';

        this.days.forEach(item => {
            const dayWrapper = document.createElement('div');
            dayWrapper.className = 'content__info-future-item';

            const dayParagraph = document.createElement('div');
            dayParagraph.className = 'content__info-future-day';
            dayParagraph.textContent = item.day;

            const dataWrapper = document.createElement('div');
            dataWrapper.className = 'content__info-future-data';

            const temperatureParagraph = document.createElement('p');
            temperatureParagraph.className = 'content__info-future-temperature';
            temperatureParagraph.textContent = item.temperature;

            const dataIcon = document.createElement('div');
            dataIcon.className = 'content__info-future-icon';

            dayWrapper.append(dayParagraph);
            dataWrapper.append(temperatureParagraph);
            dataWrapper.append(dataIcon);
            dayWrapper.append(dataWrapper);
            wrapper.append(dayWrapper);
        });

        return wrapper;
    }
}

export default FutureWeather;

