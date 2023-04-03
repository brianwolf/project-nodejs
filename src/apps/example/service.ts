import { Example } from './model'
import * as repository from './repository'


export async function list() {
    return await repository.list()
}

export async function save(example: Example) {
    return await repository.save(example)
}

export async function get(id: number) {
    return await repository.get(id)
}

export async function deleteById(id: number) {
    await repository.deleteById(id)
}