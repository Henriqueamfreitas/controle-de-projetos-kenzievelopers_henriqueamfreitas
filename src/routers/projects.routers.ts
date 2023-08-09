import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureDeveloperIdExistsMiddleWare, ensureProjectIdExistsMiddleWare 
} from "../middlewares/verify.miiddleware";
import { insertProject, getProject, updatedProject } from "../controllers/index"

const projectsRouter: Router = Router()

projectsRouter.post('/', ensureDeveloperIdExistsMiddleWare, insertProject)
projectsRouter.get('/:id', ensureProjectIdExistsMiddleWare, getProject)
projectsRouter.patch('/:id', ensureProjectIdExistsMiddleWare, ensureDeveloperIdExistsMiddleWare, updatedProject)

export { projectsRouter }