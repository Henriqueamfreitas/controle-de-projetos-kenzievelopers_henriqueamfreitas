import { QueryConfig } from "pg"
import { client } from "../database"
import { Developer, DeveloperResult } from "../interfaces/interfaces"
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



export { exemplo1Service, exemplo2Service, exemplo3Service }