import getPathName from '../utils/getPathName.js';
import { routes, resolveRoutes } from '../utils/resolveRoutes.js';
import Error404 from '../pages/Error404.js';

const router = async () => {
    const content = null || document.getElementById('content');
    content.innerHTML = '';
    const path = getPathName();
    const route = await resolveRoutes(path); // ruta
    const render = routes[route] ? routes[route] : Error404; // busca valor de la key
    content.appendChild(render());
};

export default router;
