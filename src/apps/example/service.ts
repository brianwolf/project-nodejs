import { Example } from './model'
import * as repository from './repository'


export async function list() {
    return await repository.list()
}

export async function save(example: Example) {
    return await repository.save(example)
}