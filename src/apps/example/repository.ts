import { appDataSource } from '../../libs/orm/orm'
import { ExampleEntity } from '../example/entity'
import { Example } from './model'


export async function list() {
    let entities = await appDataSource.manager.find(ExampleEntity)
    return entities.map(e => e.toModel())
}

export async function save(example: Example) {
    let entity = await appDataSource.manager.save(ExampleEntity.fromModel(example))
    return entity.id
}