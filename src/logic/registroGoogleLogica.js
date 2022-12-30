import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const registroGoogleLogica = (contenedor) => {
    const botonRegistroGoogle = contenedor.querySelector('#registroGmailBtn');

    botonRegistroGoogle.addEventListener('click', async () => {
        const provider = new GoogleAuthProvider();

        try {
            const credentials = await signInWithPopup(auth, provider); // devuelveCredencialUsuario
            console.log(credentials);
            window.location.href = 'formulario-registro';
        } catch (error) {
            console.log(error);
        }
    });
};
