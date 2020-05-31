function getCelsius(unit) {
    return (unit - 32) * 5/9;
}

function getFahrenheit(unit) {
    return (unit * 9/5) + 32;
}

module.exports = { getCelsius, getFahrenheit };