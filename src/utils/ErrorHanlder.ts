import {Response, NextFunction} from "express";
import {HTTPClientError,HTTP404Error} from './httpErrors';

export const notFoundError=()=>{
    throw new HTTP404Error('Method not found');
}

export const clientError =(err:Error, res:Response, next: NextFunction)=>{
    if(err instanceof HTTPClientError){
        console.log(JSON.stringify(err));
    try{
        let jsonError = JSON.parse(err.message);
        res.status(err.statusCode).json(jsonError);
    }
    catch(o){
        res.status(err.statusCode).send(err.message)
    }
}
    else{
        next(err);
    }
}


export const serverError =(err:Error, res: Response, next?: NextFunction)=>{
    console.log(err);
    let lol="prod1";
    if(lol==="prod"){
        res.status(500).send({
            success: false,
            error: "internal server error"
        });

    } else{
        res.status(500).send({
        sucess: false,
        error:  err.message || err.name || err.stack ||err
        });
    }
}
