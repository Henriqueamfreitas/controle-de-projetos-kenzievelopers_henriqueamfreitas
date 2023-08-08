import { QueryConfig } from "pg"
import { client } from "../database"
import { Developer, DeveloperResult } from "../interfaces/interfaces"


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
    const product: Developer = queryResult.rows[0]

    return queryResult.rows[0]
}

export { exemplo1Service }