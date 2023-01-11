import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { app } from './Firebase.js';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Inicia el autentificador con google
export const provider = new GoogleAuthProvider();

// CREAR USUARIO CON EMAIL
export const createUser = (userMail, userPass, userName) => createUserWithEmailAndPassword(auth, userMail, userPass)
  .then(() => {
    updateProfile(getAuth().currentUser, {
      displayName: userName,
    });
  });

// INGRESAR CON USUARIO EXISTENTE
export const signIn = (email, password) =>  signInWithEmailAndPassword(auth, email, password);

// INGRESAR CON GOOGLE - check
export const signInGoogle = async (onNavigate) => {
  try {
    await signInWithPopup(auth, provider);
    onNavigate('/dashboard');
  } catch (error) {
  }
};

// FUNCIÓN DE SIGNOUT - check
export const logOut = async () => {
  await signOut(auth);
};

// funcion currentuser
export const currentUserInfo = () => auth.currentUser;
