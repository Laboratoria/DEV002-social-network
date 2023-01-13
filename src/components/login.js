import {onNavigate} from '../main.js';

export const login = () => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Bienvenido';
    const buttonHome = document.createElement('button');

    buttonHome.textContent='regresar al home';

    buttonHome.addEventListener('click',() => onNavigate('/'));

    homeDiv.appendChild(buttonHome);

    return homeDiv;

};