import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";


export const imagesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImagesService {

    async pullImages() {
        const res = await imagesApi.get()
        // console.log('got images', res.data);
        appState.image = new Image(res.data)
    }

}

export const imagesService = new ImagesService()