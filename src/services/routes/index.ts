import {Route} from '../../model/types';
import {login, metodoGet} from '../../utils/index';

export const asociadasRoutes: Route[]=[
    {
        path: '/login',
        method: 'post',
        handler: login
    },
    {
        path: '/',
        method: 'get',
        handler: metodoGet
    }
]