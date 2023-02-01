import { login } from './lib/Components/dashboard.js';
import { register } from './lib/Components/register.js';
import { home } from './lib/Components/home.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/dashboard': login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
        pathname,
        window.location.origin + pathname,
    );

    while(rootDiv.firstChild){
        rootDiv.removeChild(rootDiv.firstChild);
    }

    rootDiv.appendChild(routes[pathname]());
};

rootDiv.appendChild(routes[window.location.pathname]());

const components = () => routes[window.location.pathname];

window.onpopstate = () => {
    rootDiv.removeChild(rootDiv.firstChild);
    rootDiv.append(components());
};

rootDiv.appendChild(onNavigate());
