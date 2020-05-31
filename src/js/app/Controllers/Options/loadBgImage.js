import shuffleArr from '../Options/shuffle-arr';

function loadBgImage() {
    const imageType = JSON.parse(localStorage.getItem('weather-info'));
    const IMAGE_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8800f1ff26c31c9f4d16c8f9f2606a29&tags=${imageType.info}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
    const bgBlock = document.querySelector('#bg');
    
    fetch(IMAGE_URL)
        .then(res => res.json())
        .then(data => {
            if (data === undefined) {
                loadBgImage();
                console.log('undo');
                
            } else {
                bgBlock.style.backgroundImage = `url('${shuffleArr(data.photos.photo).url_h}')`;
            }
        });
}

export default loadBgImage;