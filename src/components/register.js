/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
/* PAGINA PARA REGISTRARSE CON DATOS */
export const register = () => {
  const div = document.createElement('div');

  div.textContent = 'Registra tus datos';

  const btnHome = document.createElement('button');
  btnHome.textContent = 'Regresar al inicio';
  btnHome.addEventListener('click', () => navigateRoutes('/')); /* pathname '/' */

  div.appendChild(btnHome);
  return div;
};
