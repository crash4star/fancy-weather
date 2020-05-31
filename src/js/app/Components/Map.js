import Block from './Block';
import loadMap from '../Controllers/Map/loadMap';

class Map extends Block {
    constructor(parent, data, coords) {
        super();
        this.parent = parent;
        this.data = data;
        this.coords = coords;
    }

    create() {
        const map = document.createElement('div');
        map.className = 'content__location-map';

        const data = document.createElement('div');
        data.className = 'content__location-data';

        const dataParagraphX = document.createElement('p');
        dataParagraphX.className = 'content__location-data-text';
        dataParagraphX.textContent = 'Latitude: ';

        const dataX = document.createElement('span');
        dataX.className = 'content__location-data-dynamic-first';
        dataX.textContent = this.data.latitude;

        dataParagraphX.append(dataX);

        const dataParagraphY = document.createElement('p');
        dataParagraphY.className = 'content__location-data-text';
        dataParagraphY.textContent = 'Longitude: ';

        const dataY = document.createElement('span');
        dataY.className = 'content__location-data-dynamic-second';
        dataY.textContent = this.data.longitude;

        dataParagraphY.append(dataY);

        data.append(dataParagraphX);
        data.append(dataParagraphY);

        const mapWrapper = document.createElement('div');
        mapWrapper.setAttribute('id', 'map');
        map.setAttribute('id', 'map-frame');
        mapWrapper.append(map);
        mapWrapper.append(data);
        const parent = document.querySelector(`#${this.parent}`);
        parent.append(mapWrapper);
        loadMap(this.coords.longitude, this.coords.latitude);
    }
}

export default Map;