import {home} from '../components/Home.js';
import {register} from '../components/register.js';
// import {login} from '../components/login.js';

const rootDiv = document.getElementById('root');
const routes = {
'/':home,
'/register': register,
// '/login': login,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );
};

const componentes = routes[window.location.pathname];
rootDiv.appendChild(componentes());