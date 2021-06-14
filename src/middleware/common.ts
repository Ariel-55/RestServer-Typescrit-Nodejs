import {Router} from 'express';
import parser from "body-parser";
import cors from 'cors';

export const handleBodyRequestParsing =(router:Router)=>{
    router.use(parser.urlencoded({extended: true}));
    router.use(parser.json({limit: '5mb'}));
}
export const handleCors=(router:Router)=>{
    router.use(cors({credentials: true, origin: true}))
}



