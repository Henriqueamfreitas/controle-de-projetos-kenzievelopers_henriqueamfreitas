import { Query, QueryResult } from "pg"

interface DeveloperInterface{
    id: number,
    name: string,
    email: string,
}

type DeveloperCreateInterface = Omit<DeveloperInterface, 'id'>
type DeveloperResultInterface = QueryResult<DeveloperInterface>

interface DeveloperInformationInterface{
    id: number,
    developerSince: Date,
    preferredOS: 'Windows' | 'Linux' | 'MacOS',
    developerId: number,
}

type DeveloperInformationCreateInterface = Omit<DeveloperInformationInterface, 'id'>
type DeveloperInformationResultInterface = QueryResult<DeveloperInformationInterface>

interface DeveloperAndInformationInterface{
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date,
    developerInfoPreferredOS: 'Windows' | 'Linux' | 'MacOS',
}

type DeveloperAndInformationCreateInterface = Omit<DeveloperAndInformationInterface, 'id'>
type DeveloperAndInformationResultInterface = QueryResult<DeveloperAndInformationInterface>

export {
    DeveloperInterface, DeveloperCreateInterface, DeveloperResultInterface,
    DeveloperInformationInterface, DeveloperInformationCreateInterface, DeveloperInformationResultInterface,
    DeveloperAndInformationInterface, DeveloperAndInformationCreateInterface, 
    DeveloperAndInformationResultInterface
}