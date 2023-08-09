import { Request, Response } from "express"
import { 
        exemplo1Service, exemplo2Service, exemplo3Service, exemplo4Service, exemplo5Service,
        exemplo6Service, exemplo7Service, exemplo8Service 
} from "../services/exemplo.service"
import { DeveloperCreate, DeveloperInformationCreate, ProjectCreate } from "../interfaces/interfaces"

const insertDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:DeveloperCreate = req.body
    
    const developer = await exemplo1Service(payload)

    return res.status(201).json(developer)
}

const updatedDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const updatedDeveloper = await exemplo2Service(payload)
    
    return res.status(200).json(updatedDeveloper)
}

const deleteDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    await exemplo3Service(payload)
    
    return res.status(404).send()
}

const insertDeveloperInformation = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const developerInformation = await exemplo4Service(payload)

    return res.status(201).json(developerInformation)
}

const getDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const selectedDeveloper = await exemplo5Service(payload)
    
    return res.status(200).json(selectedDeveloper)
}

const insertProject = async (req: Request, res: Response): Promise<Response> => {
    const payload:ProjectCreate = req.body
    
    const project = await exemplo6Service(payload)

    return res.status(201).json(project)
}

const getProject = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const selectedProject = await exemplo7Service(payload)
    
    return res.status(200).json(selectedProject)
}

const updatedProject = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const updatedProject = await exemplo8Service(payload)
    
    return res.status(200).json(updatedProject)
}

export { 
        insertDeveloper, updatedDeveloper, deleteDeveloper, insertDeveloperInformation, getDeveloper,
        insertProject, getProject, updatedProject 
}