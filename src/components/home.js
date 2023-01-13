import {onNavigate} from '../main.js';

export const home = () => {
    const homeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent= 'Registrate';
    buttonLogin.textContent= 'Inicia sesion';

    buttonRegister.addEventListener('click',() => onNavigate('/register'));
    buttonLogin.addEventListener('click',() => onNavigate ('/login'));

    homeDiv.appendChild(buttonRegister);
    homeDiv.appendChild(buttonLogin);

    return homeDiv;
};