import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string;
}

export function isAuthenticated(
    res: Request,
    req: Response,
    next: NextFunction
){
    // receber o token
    const authToken = res.headers.authorization;
    if(!authToken){
        return req.status(401).end();
    }
    const [, token] = authToken.split(" ")
    

    try{

        //validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        return next();

    }catch(err){
        return req.status(401).end();
    }

}