import dotenv from "dotenv";
import express from "express";
import { loadRoutes } from "./libs/rest/rest";

dotenv.config();

const app = express();

loadRoutes(app, 'src/apps/**')


app.get("/", (req, res) => {
    res.send(JSON.stringify({ version: process.env.VERSION }));
});

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});