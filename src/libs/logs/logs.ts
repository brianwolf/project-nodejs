/**
 * Logger
 * -----------
 * v1.0.0
 */
import { createLogger, format, Logger, transports } from 'winston';
import 'winston-daily-rotate-file';
const { combine, timestamp, printf } = format;

export let logger: Logger

export class Config {
    path: string
    level: string

    constructor(path: string, level: string) {
        this.path = path
        this.level = level
    }
}

export async function configLogger(config: Config) {

    let customFormat = combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        printf(info => `${[info.timestamp]} - ${info.level} - ${info.message}`),
    )

    logger = createLogger({
        exitOnError: false,
        transports: [
            new transports.DailyRotateFile({
                filename: config.path.replace('.log', '') + '_%DATE%.log',
                level: config.level,
                datePattern: 'YYYY-MM-DD',
                maxFiles: '1d',
                format: customFormat
            }),
            new transports.Console({
                format: customFormat
            })
        ]
    })
}