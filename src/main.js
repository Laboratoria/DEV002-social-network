import { login } from './components/login.js';
import { home } from './components/home.js';
import { register } from './components/register.js';

const root = document.getElementById('root') /* contenido de html */


const routes = { 
    '/': home, 
    '/Login': login,
    '/Register': register,
};

export const navigateRoutes = (pathname) => {
    window.history.pushState ( /* to load new HTML pages */
    {}, /*state -objeto de entrada del historial- */
    pathname, /*title*/
    window.location.origin + pathname, /*url*/
    );
    while (root.firstChild){ /* defino que routes no se repita al clickear btn, y solo muestre el contenido clickeado*/
        root.removeChild(root.firstChild);
    }
    root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname]() /*variable que contiene el pathname -nombre de la ruta-*/
console.log(component)
  root.appendChild(component); /*Me muestra routes y su contenido*/
