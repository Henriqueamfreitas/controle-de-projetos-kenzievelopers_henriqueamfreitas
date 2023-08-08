import { Query, QueryResult } from "pg"

interface Developer{
    id: number,
    name: string,
    email: string,
}

type DeveloperCreate = Omit<Developer, 'id'>
type DeveloperResult = QueryResult<Developer>

interface DeveloperInformation{
    id: number,
    developerSince: Date,
    preferredOS: 'Windows' | 'Linux' | 'MacOS',
    developerId: number,
}

type DeveloperInformationCreate = Omit<DeveloperInformation, 'id'>
type DeveloperInformationResult = QueryResult<DeveloperInformation>

export { 
    Developer, DeveloperCreate, DeveloperResult, 
    DeveloperInformation, DeveloperInformationCreate, DeveloperInformationResult 
}