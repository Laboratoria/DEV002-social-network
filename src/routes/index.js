import Header from '../templates/Header';
import Inicio from '../pages/Inicio';
import Error404 from '../pages/Error404';

const routes = {
    '/': Inicio,
    '/404': Error404,
    '/:id': 'PerfilUsuario',
};
