// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

/* eslint-disable import/no-cycle */
import { Home } from './componentes/home';
import { Register } from './componentes/register';
import { Login } from './componentes/login';

const rootDiv = document.getElementById('root');

const routes = {
    '/': Home,
    '/register': Register,
    '/login': Login,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );

    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }

    rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());