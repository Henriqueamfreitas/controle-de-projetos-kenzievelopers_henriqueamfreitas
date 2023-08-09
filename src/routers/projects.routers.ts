import express, { Application, Router, json } from "express";
import "dotenv/config";
import { ensureDeveloperIdExistsMiddleWare, ensureProjectIdExistsMiddleWare 
} from "../middlewares/verify.miiddleware";
import { createProjectController, getProjectController, updateProjectController 
} from "../controllers/projects.controllers";

const projectsRouter: Router = Router()

projectsRouter.post('/', ensureDeveloperIdExistsMiddleWare, createProjectController)
projectsRouter.get('/:id', ensureProjectIdExistsMiddleWare, getProjectController)
projectsRouter.patch('/:id', ensureProjectIdExistsMiddleWare, ensureDeveloperIdExistsMiddleWare, 
updateProjectController)

export { projectsRouter }