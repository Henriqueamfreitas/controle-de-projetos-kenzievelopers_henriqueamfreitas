import express, { Application, json } from "express";
import "dotenv/config";
import { error } from "./middlewares/handle.middleware";
import { developerRouter } from "./routers/developer.routers";
import { projectsRouter } from "./routers/projects.routers";

const app: Application = express();
app.use(json())

// app.use('/developers', exemploRouter1, exemploRouter2, exemploRouter3, exemploRouter4, exemploRouter5)
app.use('/developers', developerRouter)
// app.use('/projects', exemploRouter6, exemploRouter7, exemploRouter8)
app.use('/projects', projectsRouter)

app.use(error)

export default app;
