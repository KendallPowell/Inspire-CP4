import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"



export const weatherApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})

class WeathersService {
    async pullWeather() {
        const res = await weatherApi.get()
        // console.log('got weather', res.data)
        appState.weather = new Weather(res.data)
    }
}

export const weathersService = new WeathersService()