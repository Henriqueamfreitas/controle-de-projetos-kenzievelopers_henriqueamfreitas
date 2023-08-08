import { Request, Response } from "express"
import { exemplo1Service } from "../services/exemplo.service"
import { DeveloperCreate } from "../interfaces/interfaces"

const insertDeveloper = async (req: Request, res: Response): Promise<Response> => {
    const payload:DeveloperCreate = req.body
    
    const developer = await exemplo1Service(payload)

    return res.status(201).json(developer)
}

export { insertDeveloper }