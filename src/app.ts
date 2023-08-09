import express, { Application, json } from "express";
import "dotenv/config";
import { error } from "./middlewares/handle.middleware";
import { developerRouter } from "./routers/developer.routers";
import { projectsRouter } from "./routers/projects.routers";

const app: Application = express();
app.use(json())

app.use('/developers', developerRouter)
app.use('/projects', projectsRouter)

app.use(error)

export default app;
