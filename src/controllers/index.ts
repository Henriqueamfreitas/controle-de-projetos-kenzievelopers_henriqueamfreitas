import { Request, Response } from "express"
import { exemplo1Service, exemplo2Service, exemplo3Service } from "../services/exemplo.service"
import { DeveloperCreate } from "../interfaces/interfaces"

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
    
    return res.status(204).send()
}

export { insertDeveloper, updatedDeveloper, deleteDeveloper }