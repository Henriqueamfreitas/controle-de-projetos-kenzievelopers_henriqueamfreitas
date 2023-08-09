import express, { Application, Router, json } from "express";
import "dotenv/config";
import { 
        ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, 
        ensureValidOs, ensureDeveloperIdExistsMiddleWare 
} from "../middlewares/verify.miiddleware";
import { 
        insertDeveloper, updatedDeveloper, deleteDeveloper, insertDeveloperInformation, getDeveloper,
        insertProject, getProject 
} from "../controllers/index"

const exemploRouter1: Router = Router()
const exemploRouter2: Router = Router()
const exemploRouter3: Router = Router()
const exemploRouter4: Router = Router()
const exemploRouter5: Router = Router()

const exemploRouter6: Router = Router()
const exemploRouter7: Router = Router()

exemploRouter1.post('/', ensureNoDuplicatesMiddleWare, insertDeveloper)
exemploRouter2.patch('/:id', ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, updatedDeveloper)
exemploRouter3.delete('/:id', ensureIdExistsMiddleWare, deleteDeveloper)
exemploRouter4.post('/:id/infos', ensureValidOs, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, insertDeveloperInformation)
exemploRouter5.get('/:id', ensureIdExistsMiddleWare, getDeveloper)

exemploRouter6.post('/', ensureDeveloperIdExistsMiddleWare, insertProject)
exemploRouter7.get('/:id', ensureDeveloperIdExistsMiddleWare, getProject)


export { 
        exemploRouter1, exemploRouter2, exemploRouter3, exemploRouter4, exemploRouter5,
        exemploRouter6, exemploRouter7 
}