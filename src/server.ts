import express from 'express';
import { applyRoutes, applyMiddleware } from './utils';
import {asociadasRoutes} from './services/routes';
import middleware from './middleware';
import parser from 'body-parser';
import errorHandlers from './middleware/errorHandlers';

const app=express();

applyMiddleware(middleware,app);
applyRoutes(asociadasRoutes,app);
applyMiddleware(errorHandlers,app)

app.listen(3000, ()=> console.log('servidor corriendo en el puerto 3000'));

//console.log('hola mundo');


