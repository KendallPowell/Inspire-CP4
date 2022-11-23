import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuote() {
    let quote = appState.quote
    setHTML('quote', quote.QuoteTemplate)

}

export class QuotesController {
    constructor() {
        // console.log('Quotes Controller working');
        this.pullQuotes()
        appState.on('quote', _drawQuote)
    }

    async pullQuotes() {
        try {
            await quotesService.pullQuotes()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
}