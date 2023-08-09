import { QueryConfig } from "pg"
import { client } from "../database"
import { 
        DeveloperInterface, DeveloperCreateInterface, DeveloperResultInterface,
        DeveloperInformationInterface, DeveloperInformationCreateInterface, DeveloperInformationResultInterface,
        DeveloperAndInformationInterface, DeveloperAndInformationResultInterface 
} from "../interfaces/developer.interfaces"
import format from "pg-format"

const createDeveloperService = async (payload: any) => {
  
    const queryString: string = `
        INSERT INTO developers ("name", "email")
        VALUES ($1, $2)
        RETURNING *;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [payload.name, payload.email],
    }

    const queryResult: DeveloperResultInterface = await client.query(queryConfig)

    return queryResult.rows[0]
}

const updateDeveloperService = async (payload: any) => {
        const { body, params } = payload
    
        const updateColumns:string[] = Object.keys(body)
        const updateValues:string[] = Object.values(body)
    
        const queryTemplate: string = `
            UPDATE "developers"
            SET (%I) = ROW (%L)
            WHERE id = $1
            RETURNING *;
        `
    
        const queryFormat: string = format(
            queryTemplate,
            updateColumns,
            updateValues
        )
    
        const queryConfig: QueryConfig = {
            text: queryFormat,
            values: [params.id]
        }
        
        const queryResult: DeveloperResultInterface = await client.query(queryConfig)
        const updatedDeveloper: DeveloperInterface = queryResult.rows[0]
        return updatedDeveloper
}

const deleteDeveloperService = async (payload: any) =>  {    
    const { params } = payload

    const queryString: string = `
        DELETE FROM developers
        WHERE id = $1;    
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [params.id]
    } 

    await client.query(queryConfig)
}

const createDeveloperInfoService = async (payload: any) =>  {
    const { body, params } = payload

    const queryString: string = `
    INSERT INTO developerInfos ("developerSince", "preferredOS", "developerId")
    VALUES ($1, $2, ${params.id})
    RETURNING *;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: Object.values(body),
    }

    const queryResult: DeveloperInformationResultInterface = await client.query(queryConfig)

    return queryResult.rows[0]
}

const getDeveloperService = async (payload: any) =>  {    
    const { params } = payload

    const queryString: string = `
    SELECT d.id "developerId", d.name "developerName", d.email "developerEmail", 
    dI."developerSince" "developerInfoDeveloperSince", dI."preferredOS" "developerInfoPreferredOS"
    FROM developers d
    LEFT JOIN developerInfos dI
    ON dI."developerId" = d.id
    WHERE d.id=$1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [params.id]
    } 
    const queryResult: DeveloperAndInformationResultInterface = await client.query(queryConfig)
    const selectedDeveloper: DeveloperAndInformationInterface = queryResult.rows[0]
    return selectedDeveloper
}

export { createDeveloperService, updateDeveloperService, deleteDeveloperService, 
        createDeveloperInfoService, getDeveloperService 
}