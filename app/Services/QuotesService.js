import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";



export const quotesApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuotesService {
    async pullQuotes() {
        const res = await quotesApi.get()
        appState.quote = new Quote(res.data)
        console.log('got quotes', res.data)
    }
}

export const quotesService = new QuotesService()