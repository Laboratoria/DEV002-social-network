import Header from '../templates/Header';
import Inicio from '../pages/Inicio';
import Error404 from '../pages/Error404';

const routes = {
    '/': Inicio,
    '/404': Error404,
    '/inicio-sesion': 'InicioSesion',
    '/registro-usuario': 'RegistroUsuario',
    '/formulario-registro': 'FormularioRegistro',
    '/home': 'Home',
    '/match': 'Match',
    '/:id': 'PerfilUsuario',
    '/match/:id': 'PerfilMatch',
    '/busqueda-usuario': 'BusquedaUsuario',
};

const router = async () => {

}