import {getCelsius, getFahrenheit} from '../Options/getUnits';

function updateUnits(arr, type) {
    arr.forEach(item => {
        if (type === 'c') {
            item.textContent = Math.round(getCelsius(+item.textContent));
        } else {
            item.textContent = Math.round(getFahrenheit(+item.textContent));
        }
    });
    
}

export default updateUnits;