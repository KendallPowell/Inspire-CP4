import { setHTML, setText } from "../Utils/Writer.js"

export class TimesController {
    constructor() {
        setInterval(() => {
            let time = new Date()
            setText('time', time.toLocaleTimeString('en-us', { timeStyle: "medium" }))
        }
            , 1000
        )
    }
}