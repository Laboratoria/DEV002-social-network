import Header from '../templates/Header';
import Bienvenida from '../pages/Bienvenida';
import RegistroUsuario from '../pages/RegistroUsuario';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': 'Home',
    '/404': Error404,
    '/bienvenida': Bienvenida,
    '/inicio-sesion': 'InicioSesion',
    '/registro-usuario': RegistroUsuario,
    '/formulario-registro': 'FormularioRegistro',
    '/match': 'Match',
    '/:id': 'PerfilUsuario',
    '/:id-match': 'PerfilMatch',
    '/busqueda-usuario': 'BusquedaUsuario',
};

const router = async () => {
    const content = null || document.getElementById('content');

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;
