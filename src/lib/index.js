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
export const signUp = (userMail, userPass, onNavigate) => {
  signInWithEmailAndPassword(auth, userMail, userPass)
    .then((userCredential) => {
      onNavigate('/dashboard');
      window.location.reload();
      // Signed in
      // const user = userCredential.user;
      console.log(userCredential);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        document.querySelector('#errorLogin').innerHTML = 'Este correo ya está registrado';
      } else if (error.code === 'auth/invalid-email') {
        document.querySelector('#errorLogin').innerHTML = 'El correo que ingresaste es inválido';
      } else if (error.code) {
        document.querySelector('#errorLogin').innerHTML = 'Revisa los datos ingresados, algo no está bien';
      }
    });
};

// INGRESAR CON GOOGLE - check
export const signInGoogle = async (onNavigate) => {
  try {
    const credentials = await signInWithPopup(auth, provider);
    onNavigate('/dashboard');
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
      window.location.href = '#/dashboard';
      // en caso de que se cumpla user se direccion la ruta home
    }
  });
  return userLogin;
};

// funcion currentuser
export const currentUserInfo = () => auth.currentUser;
