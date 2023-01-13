export const register =() => {
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Encuentra tu inspiracion para tus comidas diarias';
    const buttonHome = document.createElement ('button');

    buttonHome.textContent = 'regresar al home';

    homeDiv.appendChild(buttonHome);

    return homeDiv;
};