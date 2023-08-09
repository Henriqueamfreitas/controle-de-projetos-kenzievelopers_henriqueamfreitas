import { QueryConfig } from "pg"
import { client } from "../database"
import { 
    Project, ProjectCreate, ProjectResult, DeveloperAndProject, DeveloperAndProjectCreate,
    DeveloperAndProjectResult
} from "../interfaces/interfaces"
import format from "pg-format"

const createProjectService = async (payload: any) => {
    if(payload.endDate === undefined){
        const queryString = `
            INSERT INTO projects (name, description, repository, "startDate", "developerId")
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `
        const queryConfig: QueryConfig = {
            text: queryString,
            values: Object.values(payload),
        }
    
        const queryResult: ProjectResult = await client.query(queryConfig)
    
        return queryResult.rows[0]   
    } else{
        const queryString =`
            INSERT INTO projects (name, description, repository, "startDate", "endDate", "developerId")
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `
        const queryConfig: QueryConfig = {
            text: queryString,
            values: Object.values(payload),
        }

        const queryResult: ProjectResult = await client.query(queryConfig)

        return queryResult.rows[0]
    }
}

const getProjectService = async (payload: any) =>  {    
    const { params } = payload

    const queryString: string = `
    SELECT p.id "projectId", p.name "projectName", p.description "projectDescription", 
    p.repository "projectRepository", p."startDate" "projectStartDate", p."endDate" "projectEndDate",
    d.name "projectDeveloperName" 
    FROM developers d
    JOIN projects p
    ON p."developerId" = d.id
    WHERE p.id=$1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [params.id]
    } 
    const queryResult: DeveloperAndProjectResult = await client.query(queryConfig)
    const selectedProject: DeveloperAndProject = queryResult.rows[0]
    return selectedProject
}

const updateProjectService = async (payload: any) => {
    const { body, params } = payload

    const updateColumns:string[] = Object.keys(body)
    const updateValues:string[] = Object.values(body)

    const queryTemplate: string = `
        UPDATE "projects"
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
    
    const queryResult: ProjectResult = await client.query(queryConfig)
    const updatedProject: Project = queryResult.rows[0]
    return updatedProject
}

export { createProjectService, getProjectService, updateProjectService }