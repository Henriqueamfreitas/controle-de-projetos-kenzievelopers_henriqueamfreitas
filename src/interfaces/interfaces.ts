import { Query, QueryResult } from "pg"

interface Developer{
    id: number,
    name: string,
    email: string,
}

type DeveloperCreate = Omit<Developer, 'id'>
type DeveloperResult = QueryResult<Developer>

export { Developer, DeveloperCreate, DeveloperResult }