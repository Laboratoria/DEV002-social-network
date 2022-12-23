// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const openModalSU = () => {
    modalSU.style.display = 'flex';
  }

const closeModalSU = () => {
    modalSU.style.display = 'none';
  }
  
const btnOpenModalSU = document.getElementById('botonRegistrar');
btnOpenModalSU.addEventListener('click', openModalSU);

const btnCloseModalSU = document.getElementById('botonCerrarModal');
btnCloseModalSU.addEventListener('click', closeModalSU);


