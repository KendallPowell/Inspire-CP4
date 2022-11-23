
function _computeFahrenheit(temp) {
    return Math.floor((temp - 273.15) * 1.8) + 32;
}

export class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.main.temp
        this.desc = data.weather[0].description
    }

    get WeatherTemplate() {
        return `
        <h2>${_computeFahrenheit(this.temp)}°F</h2>
        <div>${this.desc}</div>
        <div>${this.name}</div>
        `
    }
}

