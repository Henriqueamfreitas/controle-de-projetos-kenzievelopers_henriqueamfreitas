import { Query, QueryResult } from "pg"

interface ProjectInterface{
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate: Date|null,
    developerId: number,
}

type ProjectCreateInterface = Omit<ProjectInterface, 'id'>
type ProjectResultInterface = QueryResult<ProjectInterface>

interface DeveloperAndProjectInterface{
    idprojectId: number,
    projectName: string,
    projectDescription: string,
    projectRepository: string,
    projectStartDate: Date,
    projectEndDate: Date|null,
    projectDeveloperName: string,
}

type DeveloperAndProjectCreateInterface = Omit<DeveloperAndProjectInterface, 'id'>
type DeveloperAndProjectResultInterface = QueryResult<DeveloperAndProjectInterface>

export {
        ProjectInterface, ProjectCreateInterface, ProjectResultInterface,
        DeveloperAndProjectInterface, DeveloperAndProjectCreateInterface, DeveloperAndProjectResultInterface
}