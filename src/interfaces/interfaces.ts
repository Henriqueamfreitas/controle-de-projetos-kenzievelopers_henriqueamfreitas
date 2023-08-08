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

interface Project{
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate: Date|null,
    developerId: number,
}

type ProjectCreate = Omit<Project, 'id'>
type ProjectResult = QueryResult<Project>

export { 
    Developer, DeveloperCreate, DeveloperResult, 
    DeveloperInformation, DeveloperInformationCreate, DeveloperInformationResult,
    DeveloperAndInformation, DeveloperAndInformationCreate, DeveloperAndInformationResult,
    Project, ProjectCreate, ProjectResult 
}