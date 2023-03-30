import { Example } from '../example/model'

export function jsonToExample(json: any) {
    return new Example(
        json.number,
        json.string,
        json.float,
        json.id,
        new Date(json.date)
    )
}

export function exampleToJson(example: Example) {
    return {
        'number': example.number,
        'string': example.string,
        'float': example.float,
        'id': example.id,
        'date': example.date.toISOString()
    }
}   