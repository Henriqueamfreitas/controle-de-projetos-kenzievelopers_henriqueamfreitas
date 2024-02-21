import { Request, Response } from "express"
import { createDeveloperService, updateDeveloperService, deleteDeveloperService, 
    createDeveloperInfoService, getDeveloperService 
} from "../services/developer.services" 
import { DeveloperCreateInterface } from "../interfaces/developer.interfaces"
import { AppError } from "../errors/error"
import { error } from "../middlewares/handle.middleware"

const createDeveloperController = async (req: Request, res: Response): Promise<Response> => {
    const payload:DeveloperCreateInterface = req.body
    
    const developer = await createDeveloperService(payload)

    return res.status(201).json(developer)
}

const updateDeveloperController = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const updatedDeveloper = await updateDeveloperService(payload)
    
    return res.status(200).json(updatedDeveloper)
}

const deleteDeveloperController = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    await deleteDeveloperService(payload)
    
    return res.status(204).send()
}

const insertDeveloperInfoController = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const developerInformation = await createDeveloperInfoService(payload)

    return res.status(201).json(developerInformation)
}

const getDeveloperController = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const selectedDeveloper = await getDeveloperService(payload)
    
    return res.status(200).json(selectedDeveloper)
}

export { 
    createDeveloperController, updateDeveloperController, deleteDeveloperController,
    insertDeveloperInfoController, getDeveloperController
}