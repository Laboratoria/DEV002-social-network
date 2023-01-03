// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLhAk9jOlsC43X5vqcFhw-eBCbrELaI4",
  authDomain: "newme-13925.firebaseapp.com",
  projectId: "newme-13925",
  storageBucket: "newme-13925.appspot.com",
  messagingSenderId: "214920308604",
  appId: "1:214920308604:web:ebebebccc31d42002be6f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const exitConsult = function (email,password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) =>{
    const user = userCredential.user
    console.log(user);
  } ).catch( (error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;

    if(errorCode === "auth/user-not-found"){
      return alert("Usuario no encontrado")
    }else if(errorCode === "auth/wrong-password"){
      return alert("Contraseña incorrecta");
    }
    console.log("Erorr de codigo", errorCode)
    console.log("Error del mensaje del codigo", errorMessage)
  })
}
