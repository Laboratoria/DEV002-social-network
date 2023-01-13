import {home} from '/components/home.js';
import {register} from '/components/register.js'
import {login} from '/components/login.js'

const rootDiv = document.getElementById('root');
const routes = {
'/':home,
'/register': register,
'/login': login,
};

const componentes = routes[window.location.pathname];
rootDiv.appendChild(componentes());
