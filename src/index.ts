import dotenv from "dotenv";
import express from "express";
import { configLogs } from "./apps/admin/logger";
import { configDB } from "./apps/admin/db";
import { logger } from './libs/logs/logs';
import { configExpress } from "./libs/rest/rest";

dotenv.config();

const app = express();
app.use(express.json())

configExpress(app, 'dist/apps/**')
configLogs()
configDB()

const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
app.listen(Number(port), host, null, () => {
    logger.info(`server started at ${host}:${port}`);
});