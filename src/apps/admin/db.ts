import { configORM } from "../../libs/orm/orm";
import { ExampleEntity } from '../example/entity';

export async function configDB() {

    configORM({
        type: "sqlite",
        database: process.env.DB_PATH,
        synchronize: true,
        logging: false,
        entities: [
            ExampleEntity
        ],
    })
}