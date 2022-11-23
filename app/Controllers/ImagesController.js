import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { setHTML, setText } from "../Utils/Writer.js";



function _drawBackground() {
    document.getElementById('background').style.backgroundImage = `url(${appState.image.imgUrl})`
    setText('author', appState.image.author)
}

export class ImagesController {
    constructor() {
        console.log('ImagesController working');
        this.pullImages()
        appState.on('image', _drawBackground)
    }

    async pullImages() {
        try {
            await imagesService.pullImages()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
}