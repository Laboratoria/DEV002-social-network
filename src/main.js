/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { Login } from './pages/login.js';
// eslint-disable-next-line import/no-cycle, import/no-unresolved
import { Register } from './pages/Register.js';
import { timeLine } from './pages/timeLine.js';
import { profile } from './pages/profile.js';

// se obtiene el elemento root del DOM, que es el contenedor raíz para la aplicación.
const root = document.getElementById('root');
// se define el objeto routes que asocia cada ruta con su componente correspondiente
const routes = {
  '/': Login,
  '/login': Login,
  '/register': Register,
  '/timeLine': timeLine,
  '/profile': profile,
};

// next reemplaza completamente el contenido del elemento root con el nuevo componente
export const next = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = '';
  root.appendChild(routes[pathname]()); // se agrega el componente correspondiente
};

// onNavigate solo reemplaza el primer hijo del elemento root.
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
// component contiene el componente asociado con la ruta actual.
const component = routes[window.location.pathname];

// window.onpopstate, guarda una copia de la última navegación en el historial, se activa cuando se navega hacia atrás o hacia adelante en el historial del navegador.
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
