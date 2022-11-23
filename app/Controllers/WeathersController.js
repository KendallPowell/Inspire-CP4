import { appState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawWeather() {
    let weather = appState.weather
    setHTML('weather', weather.WeatherTemplate)
}

export class WeathersController {
    constructor() {
        // console.log('Weather Controller Working')
        this.pullWeather()
        appState.on('weather', _drawWeather)
    }

    async pullWeather() {
        try {
            await weathersService.pullWeather()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
}