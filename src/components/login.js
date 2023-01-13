export const login = () => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Bienvenido';
    const buttonHome = document.createElement('button');

    buttonHome.textContent='regresar al home';

    homeDiv.appendChild(buttonHome);

    return homeDiv;

};