import { AppException } from '../../libs/error/error'
import { appDataSource } from '../../libs/orm/orm'
import { ExampleEntity } from '../example/entity'
import { Errors } from './error'
import { Example } from './model'


export async function list() {
    const entities = await appDataSource.manager.find(ExampleEntity)
    return entities.map(e => e.toModel().id)
}

export async function save(example: Example) {
    const entity = await appDataSource.manager.save(ExampleEntity.fromModel(example))
    return entity.id
}

export async function get(id: number) {
    const entities = await appDataSource.manager.findOneBy(ExampleEntity, { 'id': id })

    if (!entities) {
        return null
    }

    return entities.toModel()
}

export async function deleteById(id: number) {

    let exist = await get(id)
    if (!exist) {
        let msj = `Example with id ${id} not exist`
        throw new AppException(Errors.EXAMPLE_NOT_EXIST.toString(), msj)
    }

    await appDataSource.manager.delete(ExampleEntity, { 'id': id })
}
