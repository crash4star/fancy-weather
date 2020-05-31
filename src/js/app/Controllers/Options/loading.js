const blur = document.createElement('div');
const loader = document.createElement('div');
loader.classList.add('loader');
blur.classList.add('blur');

const loaderBlock = document.querySelector('.loader');
const blurBlock = document.querySelector('.blur');


function loading() {
    loaderBlock.classList.remove('d-none');
    loaderBlock.classList.remove('d-none');
}

function loadingComplete() {
    loaderBlock.classList.add('d-none');
    blurBlock.classList.add('d-none');
}

module.exports = { loading, loadingComplete };