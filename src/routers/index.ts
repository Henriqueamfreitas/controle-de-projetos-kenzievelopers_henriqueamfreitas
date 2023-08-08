import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare } from "../middlewares/verify.miiddleware";
import { insertDeveloper, updatedDeveloper, deleteDeveloper } from "../controllers/index"

const exemploRouter1: Router = Router()
const exemploRouter2: Router = Router()
const exemploRouter3: Router = Router()

exemploRouter1.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)
exemploRouter2.patch('/:id', ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, updatedDeveloper)
exemploRouter3.delete('/:id', ensureIdExistsMiddleWare, deleteDeveloper)


export { exemploRouter1, exemploRouter2, exemploRouter3 }