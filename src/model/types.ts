import {Router, Request, Response, NextFunction} from 'express';

export type Wrapper =((router: Router)=>void)

export type Handler=(
    req: Request, 
    res: Response,
    next: NextFunction
)=> Promise<void> | void;

export type Route={
    path: string,
    method: string,
    handler: Handler
}

export type mensajeRegistro={
    password: string,
    email: string
}