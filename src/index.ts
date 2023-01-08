import dotenv from "dotenv";
import express from "express";
import { configExpress } from "./libs/rest/rest";
// import { configureLogs } from "./apps/admin/logger";

dotenv.config();

const app = express();

configExpress(app, 'src/apps/**')
// configureLogs()

const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;
app.listen(Number(port), host, null, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://${host}:${port}`);
});