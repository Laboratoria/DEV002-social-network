/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
/* PAGINA DE INICIO DE SESION */
export const login = () => {
  const div = document.createElement('div');
  const sectionSignIn = document.createElement('section');
  const eMail = document.createElement('input');
  const passWord = document.createElement('input');
  const btnHome = document.createElement('button');

  sectionSignIn.appendChild(eMail);
  sectionSignIn.appendChild(passWord);

  div.textContent = 'LOG IN';
  btnHome.textContent = 'Regresar';

  btnHome.addEventListener('click', () => navigateRoutes('/Login'));

  div.appendChild(btnHome);

  return div;
};
