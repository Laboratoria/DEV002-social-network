// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { firebaseConfig } from './firebaseconfig'
// Consultas firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Servivcios Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const exitConsult = function (email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/user-not-found") {
        return alert("Usuario no encontrado");
      } else if (errorCode === "auth/wrong-password") {
        return alert("Contraseña incorrecta");
      }
      console.log("Erorr de codigo", errorCode);
      console.log("Error del mensaje del codigo", errorMessage);
    });
};

export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider);
    console.log(userResult);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    console.log(errorCode, errorMessage, email, credential);
  }
};

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user
    console.log(user);
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
    if (errorCode === "auth/email-already-in-use") {
      return alert("Este usuario ya existe");
    } else if (errorCode === "auth/weak-password") {
      return alert("Contraseña débil");
    }
    console.log("Erorr de codigo", errorCode);
    console.log("Error del mensaje del codigo", errorMessage);
  });

  }



