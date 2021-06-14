const jwt = require('jsonwebtoken');

export const generarJWT =(payload:any)=>{
    return new Promise ((resolve, reject)=>{

        jwt.sign(payload, process.env.SECRETKEY,{
            expiresIn: "4h"
        },(err:any,token:any)=>{
            if(err){
                console.log(err);
                reject("No se udo generar el token");
            } else{
                resolve(token);
            }
        })
    });
}