// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  const sectionDiv = document.createElement('section');
  const nombreApp = document.createElement('h2');
  const imageLogo = document.createElement('img');
  const bienvenidaH1 = document.createElement('h3');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  sectionDiv.className = 'sectionDiv';
  nombreApp.className = 'nombreAplicacion';
  imageLogo.className = 'imageLogo';
  bienvenidaH1.className = 'welcomeh1';
  buttonLogin.className = 'buttonLogin';
  buttonRegister.className = 'buttonRegister';

  imageLogo.src = 'images/logo-quecomemoshoy.png';

  buttonLogin.id = 'buttonLogin';
  buttonRegister.id = 'buttonRegister';

  nombreApp.textContent = 'INSPIRACIÓN PARA TUS COMIDAS';
  bienvenidaH1.textContent = 'Bienvenido';
  buttonRegister.textContent = 'Regístrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(sectionDiv);
  sectionDiv.appendChild(nombreApp);
  sectionDiv.appendChild(imageLogo);
  homeDiv.appendChild(bienvenidaH1);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
