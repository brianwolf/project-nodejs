import { configLogger, Config } from "../../libs/logs/logs";

export function configLogs() {
    configLogger(new Config(
        process.env.LOGS_PATH,
        process.env.LOGS_LEVEL
    ))
}