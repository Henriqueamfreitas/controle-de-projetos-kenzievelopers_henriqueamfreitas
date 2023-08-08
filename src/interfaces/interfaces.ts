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

interface DeveloperAndInformation{
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date,
    developerInfoPreferredOS: 'Windows' | 'Linux' | 'MacOS',
}

type DeveloperAndInformationCreate = Omit<DeveloperAndInformation, 'id'>
type DeveloperAndInformationResult = QueryResult<DeveloperAndInformation>


export { 
    Developer, DeveloperCreate, DeveloperResult, 
    DeveloperInformation, DeveloperInformationCreate, DeveloperInformationResult,
    DeveloperAndInformation, DeveloperAndInformationCreate, DeveloperAndInformationResult 
}