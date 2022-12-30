import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const registroUsuarioLogica = (contenedor) => {
    const botonRegistroGoogle = contenedor.querySelector('#registroGmailBtn');

    botonRegistroGoogle.addEventListener('click', async () => {
        const provider = new GoogleAuthProvider();

        try {
            const credentials = await signInWithPopup(auth, provider); // devuelveCredencialUsuario
            console.log(credentials);
        } catch (error) {
            console.log(error);
        }
    // falta importar en main js
    });
};
