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
        onNavigate('/login');
        window.location.reload();
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          document.getElementById('errorLogin').innerHTML = 'Este correo ya está registrado';
        } else if (error.code === 'auth/invalid-email') {
          document.getElementById('errorLogin').innerHTML = 'El correo que ingresaste es inválido';
        } else if (error.code) {
          document.getElementById('errorLogin').innerHTML = 'Revisa los datos ingresados, algo no está bien';
        }
      });
  };
  
  // INGRESAR CON GOOGLE - check
  export const signInGoogle = async (onNavigate) => {
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log('el tipo de dato es', typeof signInGoogle);
      onNavigate('/login');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  
  // FUNCIÓN DE SIGNOUT - check
  export const logOut = async () => {
    await signOut(auth);
  };
  
  // funcion currentuser
  export const currentUserInfo = () => auth.currentUser;