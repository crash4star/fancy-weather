function Clock() {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}`;
    const clock = document.querySelector('.content__info-today-item--time');
    clock.textContent = time;

    setTimeout(Clock, 1000);
}

export default Clock;