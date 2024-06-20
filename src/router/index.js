import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Services from "../pages/Services";
import Prices from "../pages/Prices";
import News from "../pages/News";
import About from "../pages/About";


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
    {
        path: '/news',
        element: (<News />)
    },
    {
        path: '/about',
        element: (<About />)
    },
]


const router = createBrowserRouter(routes);

export default router;