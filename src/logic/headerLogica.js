import { signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const headerLogica = (contenedor) => {
    // Desplegar menú de opciones

    const imagenPerfil = contenedor.querySelector('#menuOpciones');
    const menu = contenedor.querySelector('#menu');

    imagenPerfil.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Cerrar sesion
    const botonCerrarSesion = contenedor.querySelector('#cerrarSesion');
    console.log(botonCerrarSesion);
    botonCerrarSesion.addEventListener('click', async () => {
        await signOut(auth);
        console.log('estas haciendo clic');
        window.location.href = 'bienvenida';
    });
};
