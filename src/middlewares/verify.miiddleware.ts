import { NextFunction, Request, Response, request } from "express"
import { QueryConfig } from "pg"
import { client } from "../database"
import { AppError } from "../errors/error"
import format from "pg-format";
import { 
        DeveloperInterface, DeveloperCreateInterface, DeveloperResultInterface,
        DeveloperInformationInterface, DeveloperInformationCreateInterface, DeveloperInformationResultInterface,
        DeveloperAndInformationInterface, DeveloperAndInformationCreateInterface, 
        DeveloperAndInformationResultInterface 
} from "../interfaces/developer.interfaces"
import { 
        ProjectInterface, ProjectCreateInterface, ProjectResultInterface,
        DeveloperAndProjectInterface, DeveloperAndProjectCreateInterface, DeveloperAndProjectResultInterface 
} from "../interfaces/projects.interfaces";

const ensureNoDuplicatesMiddleWare = async (
    req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {
    const queryString: string = `
        SELECT * FROM developers;
    `
    
    const queryConfig: QueryConfig = {
        text: queryString,
    }
    
    const queryResult: DeveloperResultInterface = await client.query(queryConfig)
    const developers: DeveloperInterface[] = queryResult.rows

    const devsWithSameEmail: number= developers.findIndex(element => element.email === req.body.email)

    if((devsWithSameEmail !== -1) && (developers.length>0)){
        throw new AppError("Email already exists.", 409)
    }

    res.locals.devsWithSameEmail = devsWithSameEmail

    return next()
}

const ensureIdExistsMiddleWare = async (
    req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {
    const id: string = req.params.id
    const queryString: string = `
        SELECT * FROM developers;
    `
    
    const queryConfig: QueryConfig = {
        text: queryString,
    }
    
    const queryResult: DeveloperResultInterface = await client.query(queryConfig)
    const developers: DeveloperInterface[] = queryResult.rows

    const thisIdExists: number= developers.findIndex(element => element.id === Number(id))

    if((thisIdExists === -1) && (developers.length>0)){
        throw new AppError("Developer not found.", 404)
    }

    res.locals.thisIdExists = thisIdExists

    return next()
}

const ensureNoInformationDuplicates = async (
    req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {
    const id: string = req.params.id
    const queryString: string = `
        SELECT * FROM developerInfos;
    `
    
    const queryConfig: QueryConfig = {
        text: queryString,
    }
    
    const queryResult: DeveloperInformationResultInterface = await client.query(queryConfig)
    const devInformations: DeveloperInformationInterface[] = queryResult.rows

    const thisIdExists: number= devInformations.findIndex(element => element.developerId === Number(id))

    if((thisIdExists !== -1) && (devInformations.length>0)){
        throw new AppError("Developer infos already exists.", 409)
    }

    res.locals.thisIdExists = thisIdExists

    return next()
}

const ensureValidOs = async (
    req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {
    const preferredOS: string = req.body.preferredOS

    if(preferredOS !== 'MacOS' && preferredOS !== 'Windows' && preferredOS !== 'Linux'){
        throw new AppError("Invalid OS option.", 400)
    }

    return next()
}

const ensureDeveloperIdExistsMiddleWare = async (
    req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {
    const id: string = req.body.developerId
    const queryString: string = `
        SELECT * FROM developers;
    `
    
    const queryConfig: QueryConfig = {
        text: queryString,
    }
    
    const queryResult: DeveloperResultInterface = await client.query(queryConfig)
    const developers: DeveloperInterface[] = queryResult.rows

    const thisIdExists: number = developers.findIndex(element => element.id === Number(id))

    if((thisIdExists === -1) && (developers.length>0)){
        throw new AppError("Developer not found.", 404)
    }

    res.locals.thisIdExists = thisIdExists

    return next()
}

const ensureProjectIdExistsMiddleWare = async (
    req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {
    const id: string = req.params.id
    const queryString: string = `
        SELECT * FROM projects;
    `
    
    const queryConfig: QueryConfig = {
        text: queryString,
    }
    
    const queryResult: ProjectResultInterface = await client.query(queryConfig)
    const projects: ProjectInterface[] = queryResult.rows

    const thisIdExists: number = projects.findIndex(element => element.id === Number(id))

    if((thisIdExists === -1) && (projects.length>0)){
        throw new AppError("Project not found.", 404)
    }

    res.locals.thisIdExists = thisIdExists

    return next()
}

export { 
        ensureNoDuplicatesMiddleWare, ensureIdExistsMiddleWare, ensureNoInformationDuplicates, 
        ensureValidOs, ensureDeveloperIdExistsMiddleWare, ensureProjectIdExistsMiddleWare 
}