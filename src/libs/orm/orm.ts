/**
 * Orm
 * --------
 * v1.0.0
 */
import "reflect-metadata";
import { DataSource } from "typeorm";
import { logger } from '../logs/logs';

var appDataSource: DataSource

/**
 * 
 * @param params 
 */
export async function configORM(params: any) {

    appDataSource = new DataSource(params)

    appDataSource.initialize()
        .then(() => {
            logger.info('DB initialized')
        })
        .catch((error) => logger.error(error))
}
