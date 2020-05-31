function loadMap(lng, lat) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jhc2g0c3RhciIsImEiOiJja2F2OTJjOXUwejNjMnJvM3d0cTVxZWx1In0.5ZAj5hDRQUhIoD8YKFOT8w';
    const map = new mapboxgl.Map({
        container: 'map-frame',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat], // starting position [lng, lat]
        zoom: 11
    });
}

export default loadMap