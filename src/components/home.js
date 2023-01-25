/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
/* HOME DE INICIO DE SESION DE LA APP */
export const home = () => {
  const divHome = document.createElement('div'); /* div que contiene el bloque de home */

  const imgLogo = document.createElement('img'); /* imagen del logo de la app */

  const containerBtn = document.createElement('div'); /* div que contiene los botones */
  const btnLogin = document.createElement('button');
  const btnLoginGoogle = document.createElement('button'); /* inicia sesion - continue with google */
  const text = document.createElement('h3');
  const btnRegister = document.createElement('button'); /* boton de registro */

  btnLogin.textContent = 'LOG IN';
  btnLoginGoogle.textContent = '';
  text.textContent = 'Dont have an account?';
  btnRegister.textContent = 'Registrate';

  imgLogo.setAttribute('class', 'imgLogo');
  containerBtn.setAttribute('class', 'containerBtn');
  btnLogin.setAttribute('class', 'btnLogin');
  btnLoginGoogle.setAttribute('class', 'btnLoginGoogle');
  text.setAttribute('class', 'texth3');
  btnRegister.setAttribute('class', 'btnRegister');

  btnLogin.addEventListener('click', () => navigateRoutes('/Login'));
  btnLoginGoogle.addEventListener('click', () => navigateRoutes('/Login'));
  btnRegister.addEventListener('click', () => navigateRoutes('/Register')); /* evento click para ejecutar funcion navigate. -param:pathname- */

  containerBtn.appendChild(imgLogo);
  containerBtn.appendChild(btnLogin);
  containerBtn.appendChild(btnLoginGoogle);
  containerBtn.appendChild(text);
  containerBtn.appendChild(btnRegister);
  divHome.appendChild(containerBtn);

  return divHome;
};
