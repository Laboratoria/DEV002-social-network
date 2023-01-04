import { signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const headerLogica = (contenedor /* view */) => {
    // Cerrar sesion
    const botonCerrarSesion = contenedor.querySelector('#cerrarSesion');
    botonCerrarSesion.addEventListener('click', async () => {
        await signOut(auth);
        console.log('estas haciendo clic');
        // window.location.href = 'bienvenida';
    });
};
