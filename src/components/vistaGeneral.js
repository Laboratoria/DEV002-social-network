export const vistaGeneral = () => {
    const homeDiv = document.createElement('div');
    const navFijo = document.createElement('nav');
    const tituloFijo = document.createElement('h2');

    navFijo.className = 'navFijo';
    tituloFijo.className = 'nameFijo';
    tituloFijo.textContent = "¿Que comemos hoy?";

    homeDiv.appendChild(navFijo);
    navFijo.appendChild(tituloFijo);

    return homeDiv;
}