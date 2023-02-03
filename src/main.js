// Este es el punto de entrada de tu aplicacion

import { home } from "./components/home.js";
import { register } from "./components/register.js";
import { feed } from "./components/feed.js";
import { registerOk } from "./components/registerOk.js";
//import { onAuthStateChanged } from './Firebase/firebaseConfig.js';

//console.log(onAuthStateChanged);


const rootDiv = document.getElementById("root");
const routes = {
	"/": home,
	"/register": register,
	"/feed": feed,
	"/registerOk": registerOk,
};

export const toNavigate = (pathname) => {
	window.history.pushState({}, pathname, window.location.origin + pathname);

	while (rootDiv.firstChild) {
		rootDiv.removeChild(rootDiv.firstChild);
	}
	rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());

window.onpopstate = () => {
	while (rootDiv.firstChild) {
		rootDiv.removeChild(rootDiv.firstChild);
	}

	rootDiv.appendChild(routes[window.location.pathname]());
};
