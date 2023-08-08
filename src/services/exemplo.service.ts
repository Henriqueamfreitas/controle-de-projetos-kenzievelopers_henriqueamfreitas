import { QueryConfig } from "pg"
import { client } from "../database"
import { 
    Developer, DeveloperResult, DeveloperInformation, DeveloperInformationResult,
    DeveloperAndInformation, DeveloperAndInformationCreate, DeveloperAndInformationResult 
} from "../interfaces/interfaces"
import format from "pg-format"

const exemplo1Service = async (payload: any) => {
    
    const queryString: string = `
        INSERT INTO developers (name, email)
        VALUES ($1, $2)
        RETURNING *;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: Object.values(payload),
    }

    const queryResult: DeveloperResult = await client.query(queryConfig)

    return queryResult.rows[0]
}

const exemplo2Service = async (payload: any) => {
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
        
        const queryResult: DeveloperResult = await client.query(queryConfig)
        const updatedDeveloper: Developer = queryResult.rows[0]
        return updatedDeveloper
}

const exemplo3Service = async (payload: any) =>  {    
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

const exemplo4Service = async (payload: any) =>  {
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

    const queryResult: DeveloperInformationResult = await client.query(queryConfig)

    return queryResult.rows[0]
}

const exemplo5Service = async (payload: any) =>  {    
    const { params } = payload

    const queryString: string = `
    SELECT d.id "developerId", d.name "developerName", d.email "developerEmail", 
    dI."developerSince" "developerInfoDeveloperSince", dI."preferredOS" "developerInfoPreferredOS"
    FROM developers d
    LEFT JOIN developerInfos dI
    ON dI."developerId" = d.id
    WHERE "developerId"=$1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [params.id]
    } 

    const queryResult: DeveloperAndInformationResult = await client.query(queryConfig)
    const selectedDeveloper: DeveloperAndInformation = queryResult.rows[0]
    return selectedDeveloper
}


export { exemplo1Service, exemplo2Service, exemplo3Service, exemplo4Service, exemplo5Service }