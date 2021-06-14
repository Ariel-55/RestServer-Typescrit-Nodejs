import {Router, Request, Response, NextFunction} from 'express';
import { nextTick } from 'process';
import {mensajeRegistro, Route, Wrapper} from '../model/types';
import { HTTP404Error, HTTP401Error } from './httpErrors';
import {generarJWT} from './JWT';
const jwt = require('jsonwebtoken');

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

export const TokenValidations=(req: Request, res: Response, next: NextFunction)=>{
    const token= req.header('x-token');
    if(!token){
        throw new HTTP404Error({
            success: false,
            error:`No token provided`
        });
    }
    try{
       const {password, email}= jwt.verify(token , process.env.SECRETKEY);
        console.log(token);
        req.params.email=email;
        req.params.password=password;
        next();
    }
    catch(err){
            res.status(401).json({
                msg: 'Token no valido'
            })
    }

}

export const validations= (req: Request, res: Response, next: NextFunction)=>{
    const  {password, email}=req.body;

    if(!password || !email ){
        throw new HTTP404Error({
            success: false,
            error:`No user Provided`
        });
    }
    if(password != process.env.password || email!=process.env.email){
        throw new HTTP404Error({
            success: false,
            error:`Password or email incorrect`
        });
    }    
    next();
}

export const login=async (req: Request, res: Response, next: NextFunction)=>{
    const  {password, email}=req.body;

    try{

        const token:any = await  generarJWT({password, email});

        let respuesta: mensajeRegistro={
            token,
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
    res.status(200).json({
        msg: `Bienvendio usuario: ${req.params.email}`,
        pass: `Su password es: ${req.params.password} y fue loggeado correctamente`
    })
}

