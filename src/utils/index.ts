import {Router, Request, Response, NextFunction} from 'express';
import {mensajeRegistro, Route, Wrapper} from '../model/types';
import { HTTP404Error, HTTP401Error } from './httpErrors';


export const applyMiddleware=(
    middlewareWrapper: Wrapper [],
    router: Router)=>{
        for (const wrapper of middlewareWrapper){
            wrapper(router);
        }
}


export const applyRoutes=( routes: Route[], router: Router)=>{

    for (let route of routes){
        const{path, method, handler}=route;
        (router as any)[method](path, handler);
    }

}




export const login=(req: Request, res: Response, next: NextFunction)=>{
    const  {password, email}=req.body;

    if(!password || !email ){
        throw new HTTP404Error({
            success: false,
            error:`No user Provided`
        })
    }
    else if(password != process.env.password || email!=process.env.email){
        throw new HTTP404Error({
            success: false,
            error:`Password or email incorrect`
        })
    }    

    try{

        let respuesta: mensajeRegistro={
            message: "The User exists",
            password,
            email
        }
        res.send(respuesta).status(200);
    }
    catch(error){
        let errResp={
            success: false,
            error: `Bad Request: ${error.message} `
        }
        throw new HTTP401Error(errResp);

    }

}


export const metodoGet=(req: Request, res: Response, next: NextFunction)=>{
    res.status(200).json('hola mundo')
}

///holaaaaaaaaaaaaaS