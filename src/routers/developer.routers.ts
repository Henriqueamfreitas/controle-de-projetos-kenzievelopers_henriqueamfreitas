import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, 
        ensureValidOs 
} from "../middlewares/verify.miiddleware";
import { 
        insertDeveloper, updatedDeveloper, deleteDeveloper, insertDeveloperInformation, getDeveloper,
} from "../controllers/index"

const developerRouter: Router = Router()

developerRouter.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)
developerRouter.patch('/:id', ensureIdExistsMiddleWare, ensureNoDuplicatesMiddleWare, updatedDeveloper)
developerRouter.delete('/:id', ensureIdExistsMiddleWare, deleteDeveloper)
developerRouter.post('/:id/infos', ensureValidOs, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, 
insertDeveloperInformation)
developerRouter.get('/:id', ensureIdExistsMiddleWare, getDeveloper)

export { developerRouter }