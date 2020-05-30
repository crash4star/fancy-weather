import Block from './Block';

class Map extends Block {
    constructor(parent, data) {
        super();
        this.parent = parent;
        this.data = data;
    }

    create() {
        const map = document.createElement('div');
        map.className = 'content__location-map';

        const data = document.createElement('div');
        data.className = 'content__location-data';

        Object.keys(this.data).forEach(item => {
            const dataParagraph = document.createElement('p');
            dataParagraph.className = 'content__location-data-text';
            dataParagraph.textContent = item;

            const dataX = document.createElement('span');
            dataX.className = 'content__location-data-dynamic-first';
            dataX.textContent = this.data[item].x;

            const dataY = document.createElement('span');
            dataY.className = 'content__location-data-dynamic-second';
            dataY.textContent = this.data[item].y;
            
            dataParagraph.append(dataX);
            dataParagraph.append(dataY);
            data.append(dataParagraph);
        });
        const mapWrapper = document.createElement('div');
        mapWrapper.setAttribute('id', 'map');
        mapWrapper.append(map);
        mapWrapper.append(data);
        const parent = document.querySelector(`#${this.parent}`);
        parent.append(mapWrapper);
    }
}

export default Map;

// const data = {
//     latitude :{
//         x: 53,
//         y: 54
//     },
//     longitude :{
//         x: 27,
//         y: 34
//     }
// };