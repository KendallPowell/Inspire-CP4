
function _computeFahrenheit(temp) {
    return Math.floor((temp - 273.15) * 1.8) + 32;
}

function _computeCelsius(temp) {
    return Math.floor((temp - 273.15))
}

export class Weather {
    constructor(data) {
        this.fahrenheitDisplayed = true
        this.name = data.name
        this.fahrenheit = _computeFahrenheit(data.main.temp)
        this.celsius = _computeCelsius(data.main.temp)
        this.desc = data.weather[0].description
    }

    get WeatherTemplate() {
        if (this.fahrenheitDisplayed) {
            return `
        <h2 onclick="app.weathersController.toggle()">${this.fahrenheit}°F</h2>
        <div>${this.desc}</div>
        <div>${this.name}</div>
        `
        }
        else {
            return `
        <h2 onclick="app.weathersController.toggle()">${this.celsius}°C</h2>
        <div>${this.desc}</div>
        <div>${this.name}</div>
        `
        }
    }
}

