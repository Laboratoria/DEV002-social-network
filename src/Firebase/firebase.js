import { app } from "../Firebase/firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

export const auth = getAuth(app);

//Crear Usuario
export const signUpWithPass = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
}