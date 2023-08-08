import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare } from "../middlewares/verify.miiddleware";
import { insertDeveloper, updatedDeveloper } from "../controllers/index"

const exemploRouter1: Router = Router()
const exemploRouter2: Router = Router()

exemploRouter1.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)
exemploRouter2.patch('/:id', ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, updatedDeveloper)


export { exemploRouter1, exemploRouter2 }