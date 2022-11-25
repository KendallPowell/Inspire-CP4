import { appState } from "../AppState.js"


function _computeDate(date) {
    return date.toLocaleTimeString('en-us', { timeStyle: "medium" })
}

export class Image {
    constructor(data) {
        this.imgUrl = data.imgUrl
        this.author = data.author
        this.date = new Date().toLocaleTimeString('en-us', { timeStyle: "medium" })
    }

    get TimeTemplate() {
        return `
        <h1 class="text-center text-white">
          ${_computeDate(this.date)}
        </h1>
        `
    }
}