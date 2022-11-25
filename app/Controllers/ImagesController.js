import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTime() {
    let time = appState.time
    template = ''
    time.forEach(t => template += t)
    setHTML('time', template)


}

function _drawBackground() {
    document.getElementById('background').style.backgroundImage = `url(${appState.image.imgUrl})`
    setText('author', appState.image.author)
}

export class ImagesController {
    constructor() {
        // console.log('ImagesController working');
        this.pullImages()
        _drawTime()
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