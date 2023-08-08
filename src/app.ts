import express, { Application, json } from "express";
import "dotenv/config";
import { error } from "./middlewares/handle.middleware";
import { exemploRouter1 } from "./routers";

const app: Application = express();
app.use(json())

app.use('/developers', exemploRouter1)

app.use(error)

export default app;
