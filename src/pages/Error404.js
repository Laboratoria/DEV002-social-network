const Error404 = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('error404');
    const view = `
        <img src='https://media.giphy.com/media/ii8SM2fZLcz8Cc0oRQ/giphy.gif' alt='Gif de perrito reparando'/>
        <h3>Lo sentimos, no disponible por el momento</h3>
    `;
    contenedor.innerHTML = view;
    return contenedor;
};

export default Error404;
