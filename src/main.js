import { home } from './components/home.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { vistaGeneral } from './components/vistaGeneral.js';

const rootDiv = document.getElementById('root');

const routes = {
    '/': home,
    '/register': register,
    '/login': login,
    '/vistaGeneral': vistaGeneral,
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

rootDiv.appendChild(component());
