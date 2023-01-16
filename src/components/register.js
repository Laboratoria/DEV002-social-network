import { onNavigate } from "../js/routes.js";

export const register = () => {

    const registerDiv = document.createElement('div');
    const nameApp = document.createElement('h1');
    nameApp.textContent = "Dad's Power   Sign Up";

    registerDiv.appendChild(nameApp);

    const buttonLogin = document.createElement('li');
    buttonLogin.textContent = 'Sign in';
    buttonLogin.id = 'botonLoguear';

    registerDiv.appendChild(buttonLogin);
    buttonLogin.addEventListener('click', () => onNavigate('/login'));




    return registerDiv;
}