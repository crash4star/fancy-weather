import loadBgImage from '../Options/loadBgImage';

function updateBgImage() {
    const updateBgImageBtn = document.querySelector('#picture-update');
    updateBgImageBtn.addEventListener('click', () => {
        loadBgImage();
    });
}

export default updateBgImage;