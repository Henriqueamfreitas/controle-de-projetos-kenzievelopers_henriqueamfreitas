import { Request, Response } from "express"
import { createDeveloperService, updateDeveloperService, deleteDeveloperService, 
    createDeveloperInfoService, getDeveloperService 
} from "../services/developer.services" 
import { createProjectService, getProjectService, updateProjectService } from "../services/projects.services"
import { DeveloperCreateInterface } from "../interfaces/developer.interfaces"
import { 
    ProjectInterface, ProjectCreateInterface, ProjectResultInterface,
    DeveloperAndProjectInterface, DeveloperAndProjectCreateInterface, DeveloperAndProjectResultInterface 
} from "../interfaces/projects.interfaces"


const createProjectController = async (req: Request, res: Response): Promise<Response> => {
    const payload:ProjectCreateInterface = req.body
    
    const project = await createProjectService(payload)

    return res.status(201).json(project)
}

const getProjectController = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const selectedProject = await getProjectService(payload)
    
    return res.status(200).json(selectedProject)
}

const updateProjectController = async (req: Request, res: Response): Promise<Response> => {
    const payload:Request = req
    
    const updatedProject = await updateProjectService(payload)
    
    return res.status(200).json(updatedProject)
}

export { createProjectController, getProjectController, updateProjectController }