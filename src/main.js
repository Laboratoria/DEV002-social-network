// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './component/login.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './component/home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './component/register.js';

const routes = {
  '/': Home, // objeto que contiene las direcciones
  '/Login': Login,
  '/Register': Register,
};

export const surfing = (pathname, archivoNuevo = routes) => {
  const rootMain = document.querySelector('#containerMain');
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // En la sintaxis de replaceChildren "archivo nuevo(seccion)" es el archivo que reemplazará
  // la seccion actual y lo que está entre corchetes "archivoActual" es el nombre de la nueva
  return rootMain.replaceChildren(archivoNuevo[pathname]());
};
window.addEventListener('DOMContentLoaded', () => surfing(window.location.pathname));
