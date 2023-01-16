import { onNavigate } from '../main.js';

export const login = () => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Bienvenido';
    /*const imageLogo = document.createElement('img');
    imageLogo.className = 'imageLogo';
    imageLogo.src = "images/logo-red-social.jpg";
    homeDiv.appendChild(imageLogo);*/
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'regresar al home';

    buttonHome.addEventListener('click', () => onNavigate('/'));

    homeDiv.appendChild(buttonHome);

    return homeDiv;
};
    

