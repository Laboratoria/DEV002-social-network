import {home} from '/components/home.js';
import {register} from '/components/register.js'
import {login} from '/components/login.js'

const rootDiv = document.getElementById('root');

const routes = {   
    '/': Home,
    '/register': Register,
    '/login': login,
};

const component =routes[window.location.pathname];
rootDiv.appendChild(component());