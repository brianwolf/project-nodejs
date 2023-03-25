import { configLogger, Config } from "../../libs/logs/logs";

export function configureLogs() {
    configLogger(new Config(
        process.env.LOGS_PATH,
        process.env.LOGS_LEVEL
    ))
}