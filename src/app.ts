import express, { Application, json } from "express";
import "dotenv/config";
import { error } from "./middlewares/handle.middleware";
import { 
        exemploRouter1, exemploRouter2, exemploRouter3, exemploRouter4, exemploRouter5,
        exemploRouter6 
} from "./routers";

const app: Application = express();
app.use(json())

app.use('/developers', exemploRouter1, exemploRouter2, exemploRouter3, exemploRouter4, exemploRouter5)
app.use('/projects', exemploRouter6)

app.use(error)

export default app;
