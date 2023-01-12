// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { register } from './components/register.js';
import { feed } from './lib/index.js';

const rootDiv = document.getElementById("root");
const routes = {
    "/": home,
    "/register": register,
    "/feed": feed
};
rootDiv.appendChild(routes[window.location.pathname]());