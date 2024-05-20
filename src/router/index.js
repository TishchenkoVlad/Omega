import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Services from "../pages/Services";
import Prices from "../pages/Prices";


export const routes = [  //маршрутизация страниц. их объявление
    {
        path: '/',
        element: (<Main />)
    },
    {
        path: '/services',
        element: (<Services />)
    },
    {
        path: '/prices',
        element: (<Prices />)
    },
]


const router = createBrowserRouter(routes);

export default router;