// import { NextFunction, Request, Response } from "express";
// import format from "pg-format";

// import { pgClient } from "../database"
// import { QueryResult } from "pg";
// import { tUser, tUserResult } from "../interfaces"
// import { AppError } from "../errors/error";

// type tGenericEntity = Object
// type tGenericEntityResult = QueryResult<tGenericEntity>

// const idExists =
//     (tableName: string) =>
//     async (
//         req: Request,
//         res: Response,
//         next: NextFunction
//     ): Promise<Response | void> => {
//             const id: string = req.params.id

//             const queryTemplate: string = `
//                 SELECT * FROM %I WHERE id = %L
//             `
//             const queryFormat: string = format(queryTemplate, tableName, id)
//             const queryResult: tGenericEntityResult = await pgClient.query(
//                 queryFormat
//             )
//             const foundEntity: tGenericEntity = queryResult.rows[0]

//             if(foundEntity = undefined){
//                 throw new AppError("Entity not found", 404)
//             }
//             res.locals.foundEntity = foundEntity

//             return next()
//     }

// const emailExists = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
//     ): Promise<Response | void> => {
//             const { email }: { email: string } = req.body

//             if(email=undefined) return next()
//             const queryTemplate: string = `
//             SELECT * FROM "users" WHERE email = %L
//             `
//             const queryFormat: string = format(queryTemplate, email)
//             const queryResult: tUserResult = await pgClient.query(
//                 queryFormat
//             )
//             const foundUser: tUser = queryResult.rows[0]

//             if(foundUser !== undefined){
//                 throw new AppError("Email already exists")
//             }

//             return next()
//     }

// export { idExists, emailExists }