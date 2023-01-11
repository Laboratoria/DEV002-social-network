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
export const createUser = (userEmail, userPassword, userName) => createUserWithEmailAndPassword(auth, userEmail,  userPassword)
  .then(() => {
    updateProfile(getAuth().currentUser, {
      displayName: userName,
    });
    return createUser;
  });

// INGRESAR CON USUARIO EXISTENTE
export const signIn = (userEmail, userPassword, onNavigate) => {
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(() => {
      onNavigate('/#login');
      window.location.reload();
      // Signed in
    })
};

// INGRESAR CON GOOGLE - check
export const signInGoogle = async (onNavigate) => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    onNavigate('/#login');
    window.location.reload();
  } catch (error) {
  }
};

// FUNCIÓN DE SIGNOUT - check
export const logOut = async () => {
  await signOut(auth);
};
// FUNCION AUTHLOGIN 
export const authLogin = () => {
  // authLogin es la funcion para verificar usuario ya registrado y direccionarlo a nueva ruta
  const userLogin = firebase.auth().onAuthStateChanged((user) => {
    // Usamos el metodo onAuthStateChanged para verificar el estado de autenticacion
    if (user) {
      window.location.href = '/login';
      // en caso de que se cumpla user se direccion la ruta home
    }
  });
  return userLogin;
};

// funcion currentuser
export const currentUserInfo = () => auth.currentUser;
