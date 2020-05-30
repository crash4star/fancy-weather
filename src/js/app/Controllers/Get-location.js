import getCityInfo from './Header/Get-city-info';

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(loadPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function loadPosition(position) {
    const LOCATION_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=a9ce39b9ddbf9d684cd7c232eabc2fca`;
    
    fetch(LOCATION_URL)
        .then(res => res.json())
        .then(data => {
            getCityInfo(data.name);
        });
}

export default getLocation;