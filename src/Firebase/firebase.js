import { app } from "../Firebase/firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, updateProfile, signInWithPopup, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//Crear Usuario
export const signUpWithPass = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password) 
export const signInWithPass = (auth, email, password) => signInWithEmailAndPassword(auth, email, password)
export const logout = (auth) => signOut(auth)
export const viewer = (auth, user) => onAuthStateChanged(auth, (user))
export const popUpGoogle = (auth, provider) => signInWithPopup(auth, provider)



