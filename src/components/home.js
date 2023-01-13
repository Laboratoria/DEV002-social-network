export const home = () => {
    const homeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent= 'Registrate';
    buttonLogin.textContent= 'Inicia sesion';

    homeDiv.appendChild(buttonRegister);
    homeDiv.appendChild(buttonLogin);

    return homeDiv;
};