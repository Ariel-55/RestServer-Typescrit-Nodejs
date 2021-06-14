import {Route} from '../../model/types';
import {login, metodoGet, TokenValidations, validations} from '../../utils/index';

export const asociadasRoutes: Route[]=[
    {
        path: '/login',
        method: 'post',
        handler: [validations, login]
    },
    {
        path: '/data',
        method: 'get',
        handler: [TokenValidations, metodoGet]
    }
]