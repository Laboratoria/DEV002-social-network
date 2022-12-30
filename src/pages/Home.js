const homeLogica = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('inicio-sesion');
    const view = `
    <p>Aqui sale el menu </p>
    `;

    contenedor.innerHTML = view;
    return contenedor;
};
export default homeLogica;
