function getLocation() {
    return new Promise((resolve, reject) => {
        function success(pos) {
            const crd = pos.coords;

            const LOCATION_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a9ce39b9ddbf9d684cd7c232eabc2fca`;

            fetch(LOCATION_URL)
                .then(res => res.json())
                .then(data => {
                    resolve(data.name);
                });
        }

        navigator.geolocation.getCurrentPosition(success);
    });
}

export default getLocation;