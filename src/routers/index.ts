import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, ensureValidOs } from "../middlewares/verify.miiddleware";
import { insertDeveloper, updatedDeveloper, deleteDeveloper, insertDeveloperInformation } from "../controllers/index"

const exemploRouter1: Router = Router()
const exemploRouter2: Router = Router()
const exemploRouter3: Router = Router()
const exemploRouter4: Router = Router()

exemploRouter1.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)
exemploRouter2.patch('/:id', ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, updatedDeveloper)
exemploRouter3.delete('/:id', ensureIdExistsMiddleWare, deleteDeveloper)
exemploRouter4.post('/:id/infos', ensureValidOs, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, insertDeveloperInformation)


export { exemploRouter1, exemploRouter2, exemploRouter3, exemploRouter4 }