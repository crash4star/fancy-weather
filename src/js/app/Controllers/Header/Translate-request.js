function TranslateRequest(request) {
    const TRANASLATE_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea4237b51c6db082c966f27a7895cd1e8b44&text=${request}&lang=en`;

    return new Promise((resolve, reject) => {
        fetch(TRANASLATE_URL)
            .then(res => res.json())
            .then(data => {
                resolve(data.text[0]);
            });
    });
}

export default TranslateRequest;