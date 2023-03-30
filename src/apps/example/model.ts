
export class Example {

    id: number
    number: number
    string: string
    float: number
    date: Date

    constructor(
        number: number,
        string: string,
        float: number,
        id: number = null,
        date: Date = new Date()
    ) {
        this.id = id
        this.number = number
        this.string = string
        this.float = float
        this.date = date
    }
}