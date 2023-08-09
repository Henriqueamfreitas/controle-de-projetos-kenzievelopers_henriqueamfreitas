import { Request, Response } from "express"
import { createDeveloperService, updateDeveloperService, deleteDeveloperService, 
    createDeveloperInfoService, getDeveloperService 
} from "../services/developer.services" 
import { createProjectService, getProjectService, updateProjectService } from "../services/projects.services"
import { DeveloperCreate, DeveloperInformationCreate, ProjectCreate } from "../interfaces/interfaces"

const insertDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:DeveloperCreate = req.body
    
    const developer = await createDeveloperService(payload)

    return res.status(201).json(developer)
}

const updatedDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const updatedDeveloper = await updateDeveloperService(payload)
    
    return res.status(200).json(updatedDeveloper)
}

const deleteDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    await deleteDeveloperService(payload)
    
    return res.status(404).send()
}

const insertDeveloperInformation = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const developerInformation = await createDeveloperInfoService(payload)

    return res.status(201).json(developerInformation)
}

const getDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const selectedDeveloper = await getDeveloperService(payload)
    
    return res.status(200).json(selectedDeveloper)
}

const insertProject = async (req: Request, res: Response): Promise<Response> => {
    const payload:ProjectCreate = req.body
    
    const project = await createProjectService(payload)

    return res.status(201).json(project)
}

const getProject = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const selectedProject = await getProjectService(payload)
    
    return res.status(200).json(selectedProject)
}

const updatedProject = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const updatedProject = await updateProjectService(payload)
    
    return res.status(200).json(updatedProject)
}

export { 
        insertDeveloper, updatedDeveloper, deleteDeveloper, insertDeveloperInformation, getDeveloper,
        insertProject, getProject, updatedProject 
}