import { configLogger, Config } from "../../libs/logs/logs";

export function configureLogs() {
    configLogger(new Config(
        'logs',
        process.env.LOGS_PATH,
        process.env.LOGS_LEVEL
    ))
}