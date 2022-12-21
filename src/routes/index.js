import getPathName from '../utils/getPathName.js';
import { routes, resolveRoutes } from '../utils/resolveRoutes.js';
import Error404 from '../pages/Error404.js';

const router = async () => {
    const content = null || document.getElementById('content');
    const path = getPathName();
    const route = await resolveRoutes(path);
    const render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;
