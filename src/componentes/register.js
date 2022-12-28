// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Bienvenida al Login';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al Home';

    buttonHome.addEventListener('click', () => onNavigate('/'));

    HomeDiv.appendChild(buttonHome);

    return HomeDiv;
};