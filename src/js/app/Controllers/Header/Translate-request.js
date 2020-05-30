function TranslateRequest(request) {
    const TRANASLATE_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${request}&lang=en`;

    return new Promise((resolve, reject) => {
        fetch(TRANASLATE_URL)
        .then(res => res.json())
        .then(data => {
            const SEARCH_URL = `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=a9ce39b9ddbf9d684cd7c232eabc2fca`;
            resolve(SEARCH_URL); 
        });
    });
}

export default TranslateRequest;