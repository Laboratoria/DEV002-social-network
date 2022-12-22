import Bienvenida from '../pages/Bienvenida.js';
import RegistroUsuario from '../pages/RegistroUsuario.js';
import Error404 from '../pages/Error404.js';
import FormularioRegistroMascota from '../pages/FormularioRegistroMascota.js';

export const routes = {
    '/': 'Home',
    '/404': Error404,
    '/bienvenida': Bienvenida,
    '/inicio-sesion': 'InicioSesion',
    '/registro-usuario': RegistroUsuario,
    '/formulario-registro': FormularioRegistroMascota,
    '/match': 'Match',
    '/:id': 'PerfilUsuario',
    '/:id-match': 'PerfilMatch',
    '/busqueda-usuario': 'BusquedaUsuario',
};

export const resolveRoutes = (route) => {
    const routesList = Object.keys(routes);
    if (route) {
        const validRoute = routesList.includes(route) ? route : '/404';
        return validRoute;
    }
    return `/${route}`; // /match (otra que no sea / o /bienvenida)
};
