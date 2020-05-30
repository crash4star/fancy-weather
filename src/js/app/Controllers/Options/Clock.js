function Clock(element) {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}`;
    console.log(time);
    
    setTimeout(Clock, 1000);
}

export default Clock;