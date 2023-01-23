/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
/* PAGINA DE INICIO DE SESION */
export const login = () => {
  const div = document.createElement('div');
  div.textContent = 'LOG IN';
  const btnHome = document.createElement('button');

  btnHome.textContent = 'Regresar';
  btnHome.addEventListener('click', () => navigateRoutes('/'));

  div.appendChild(btnHome);

  return div;
};
