import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, 
        ensureValidOs 
} from "../middlewares/verify.miiddleware";
import { 
        createDeveloperController, updateDeveloperController, deleteDeveloperController,
        insertDeveloperInfoController, getDeveloperController 
} from "../controllers/developer.controllers";

const developerRouter: Router = Router()

developerRouter.post('/', ensureNoDuplicatesMiddleWare, createDeveloperController)
developerRouter.patch('/:id', ensureIdExistsMiddleWare, ensureNoDuplicatesMiddleWare, updateDeveloperController)
developerRouter.delete('/:id', ensureIdExistsMiddleWare, deleteDeveloperController)
developerRouter.post('/:id/infos', ensureValidOs, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, 
insertDeveloperInfoController)
developerRouter.get('/:id', ensureIdExistsMiddleWare, getDeveloperController)

export { developerRouter }