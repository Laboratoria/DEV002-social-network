import Header from '../templates/Header.js';
import Timeline from '../templates/timeline.js';

const Home = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('Home');
    contenedor.innerHTML = '';
    const view = Header();
    contenedor.innerHTML = view;
    const otroContenedor = document.createElement('section');
    otroContenedor.classList.add('Timeline');
    const otroview = Timeline();
    otroContenedor.innerHTML = otroview;

    const contenedorPadre = document.createElement('section');
    contenedor.classList.add('Todo');

    contenedorPadre.appendChild(contenedor);
    contenedorPadre.appendChild(otroContenedor);

    console.log(contenedorPadre);

    return contenedorPadre;
};

export default Home;
