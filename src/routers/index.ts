import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare } from "../middlewares/verify.miiddleware";
import { insertDeveloper } from "../controllers/index"

const exemploRouter1: Router = Router()

exemploRouter1.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)

export { exemploRouter1 }