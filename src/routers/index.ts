import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, ensureValidOs } from "../middlewares/verify.miiddleware";
import { insertDeveloper, updatedDeveloper, deleteDeveloper, insertDeveloperInformation, getDeveloper } from "../controllers/index"

const exemploRouter1: Router = Router()
const exemploRouter2: Router = Router()
const exemploRouter3: Router = Router()
const exemploRouter4: Router = Router()
const exemploRouter5: Router = Router()

exemploRouter1.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)
exemploRouter2.patch('/:id', ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, updatedDeveloper)
exemploRouter3.delete('/:id', ensureIdExistsMiddleWare, deleteDeveloper)
exemploRouter4.post('/:id/infos', ensureValidOs, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, insertDeveloperInformation)
exemploRouter5.get('/:id', ensureIdExistsMiddleWare, getDeveloper)


export { exemploRouter1, exemploRouter2, exemploRouter3, exemploRouter4, exemploRouter5 }