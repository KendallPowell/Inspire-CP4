

export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
            <div class="text-center">
                <div>
                    <p>${this.content}</p>
                </div>
                <div class="on-hover">
                    <h4>${this.author}</h4>
                </div>
            </div>
        `
    }
}