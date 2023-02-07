// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { popupRegister } from '../lib/firebase/registerFir.js';

export const register = () => {
  const homeDiv = document.createElement('div');
  const sectionDiv = document.createElement('section');
  const nombreApp = document.createElement('h2');
  const imageLogo = document.createElement('img');
  const registrateH1 = document.createElement('h3');
  const buttonGoogle = document.createElement('button');
  const iconGoogle = document.createElement('img');
  const buttonCorreo = document.createElement('button');
  const iconCorreo = document.createElement('img');
  const hrefHome = document.createElement('href');

  sectionDiv.className = 'sectionDiv';
  nombreApp.className = 'nombreAplicacion';
  imageLogo.className = 'imageLogo';
  registrateH1.className = 'registrate';
  iconGoogle.className = 'iconGoogle';
  iconCorreo.className = 'iconCorreo';
  hrefHome.className = 'hrefHome';

  buttonGoogle.id = 'google';
  buttonCorreo.id = 'correo';
  hrefHome.id = 'hrefHome';

  imageLogo.src = 'images/logo-quecomemoshoy.png';
  iconGoogle.src = 'images/google.png';
  iconCorreo.src = 'images/gmail.png';

  nombreApp.textContent = 'INSPIRACIÓN PARA TUS COMIDAS';
  registrateH1.textContent = 'Registrate';
  buttonGoogle.textContent = 'REGISTRATE CON GOOGLE';
  buttonCorreo.textContent = 'REGISTRATE CON EMAIL';
  hrefHome.textContent = 'Regresar al home';

  buttonGoogle.addEventListener('click', async () => {
    const prueba = await popupRegister();
    console.log(prueba);
    onNavigate('/vistaGeneral');
  });
  buttonCorreo.addEventListener('click', () => {
    onNavigate('/form');
  });
  hrefHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(sectionDiv);
  sectionDiv.appendChild(nombreApp);
  sectionDiv.appendChild(imageLogo);
  homeDiv.appendChild(registrateH1);
  homeDiv.appendChild(buttonGoogle).appendChild(iconGoogle);
  homeDiv.appendChild(buttonCorreo).appendChild(iconCorreo);
  homeDiv.appendChild(hrefHome);

  return homeDiv;
};
