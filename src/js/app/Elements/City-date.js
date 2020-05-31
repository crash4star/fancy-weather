class CityDate {
    constructor(city, country, date) {
        this.city = city;
        this.country = country;
        this.date = date;
    }

    create() {
        const wrapper = document.createElement('div');
        wrapper.className = 'content__info-city-date';

        const locationHeadline = document.createElement('h3');
        locationHeadline.className = 'content__info-headline';
        locationHeadline.textContent = `${this.city}, ${this.country}`;

        const wrapperToday = document.createElement('div');
        wrapperToday.className = 'content__info-today';

        const dateParagraph = document.createElement('p');
        dateParagraph.className = 'content__info-today-item content__info-today-item--date';
        dateParagraph.textContent = `${this.date}`;
        
        const timeParagraph = document.createElement('p');
        timeParagraph.className = 'content__info-today-item content__info-today-item--time';

        wrapper.append(locationHeadline);
        wrapperToday.append(dateParagraph);
        wrapperToday.append(timeParagraph);
        wrapper.append(wrapperToday);

        return wrapper;
    }
}

export default CityDate;