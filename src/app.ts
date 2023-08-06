import express, { Application } from "express";
import "dotenv/config";
import { error } from "./middlewares/handle.middleware";

const app: Application = express();

app.use(error)
export default app;
