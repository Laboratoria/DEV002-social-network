import { onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const homeLogica = (contenedor) => {
    // Metodo onAuthStateChanged - Obtener el usuario que ha iniciado sesión actualmente
    onAuthStateChanged(auth, (user) => {
        if (user) { // User is signed in
            console.log(user);
            const uid = user.uid;
            console.log(uid);
            const displayName = user.displayName;
            console.log(displayName);
            const username = user.username;
            console.log(username);
            const email = user.email;
            const photoURL = user.photoURL;
            const tokenUsuario = user.accessToken;
            // console.log(tokenUsuario);
        } else {
            // User is signed out
            window.location.href = 'bienvenida';
        }
    });

    // Metodo current user - Obtener perfil de usuario
        /*const user = auth.currentUser;
        console.log(user);
        if (user !== null) {
            
        } else {
        // No user is signed in.
            // window.location.href = 'bienvenida';
    }*/
};
