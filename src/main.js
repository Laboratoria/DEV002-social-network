// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
   sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQKOcN9jLUCxn2zXz-mkJKV-BaeFjcKvo",
  authDomain: "redsocialnvj-47db7.firebaseapp.com",
  projectId: "redsocialnvj-47db7",
  storageBucket: "redsocialnvj-47db7.appspot.com",
  messagingSenderId: "161909447570",
  appId: "1:161909447570:web:b126b68b577520ab947f4b"
};


/*abrieno modal sign up*/
const openModalSU = () => {
  modalSU.style.display = 'flex';
}

const closeModalSU = () => {
  modalSU.style.display = 'none';
}

const btnOpenModalSU = document.getElementById('botonRegistrar');
btnOpenModalSU.addEventListener('click', openModalSU);

const btnCloseModalSU = document.getElementById('botonCerrarModalSU');
btnCloseModalSU.addEventListener('click', closeModalSU);

// open-close modal Sing in 
const openModalSI = () => {
  modalSI.style.display = 'flex';
}

const closeModalSI = () => {
  modalSI.style.display = 'none';
}
const btnOpenModalSI = document.getElementById('botonLoguear');
btnOpenModalSI.addEventListener('click', openModalSI);

const btnCloseModalSI = document.getElementById('botonCerrarModalSI');
btnCloseModalSI.addEventListener('click', closeModalSI);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Validacion correo 
function validarCorreo (valorCorreo) {

  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
 if ( expReg.test(valorCorreo) === true ){ 
    console.log('si es valido');
      return true
  } else {
    console.log('No es valido');
    return false
  }
}

//SIGN UP
const signupForm = document.getElementById('formularioSU');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); //para cancelar el evento de reinicio del formulario
  const valorCorreo = document.getElementById('idCorreoSU').value;
  const posiblcorreo = validarCorreo(valorCorreo)
  let signupEmail = "";
  if(posiblcorreo === true){ 
   signupEmail = valorCorreo;
  } else {
    signupEmail = "";
  }
    
  const signupPassword = document.getElementById('idContraseñaSU').value;

  //función de Firebase para registrar un usuario

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then((userCredential) => {
      
      const user = userCredential.user;
      if(user){
       user.sendEmailVerification(auth.currentUser);
      }
      closeModalSU();

      signupForm.reset();
      signupForm.querySelector('.message-error').innerHTML = "";

    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message;
     
      if( errorCode === 'auth/email-already-in-use'){
      signupForm.querySelector('.message-error').innerHTML = 'El email ya se encuentra registrado'
     }else if(errorCode === 'auth/weak-password'){
      signupForm.querySelector('.message-error').innerHTML = ' Debe tener al menos 6 carácteres'
     }
      
     });
       console.log('signUp');
  
});

//SIGN IN

const signinForm = document.getElementById('formularioSI');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('idCorreoSI').value;
    const password = document.getElementById('idContraseñaSI').value;

     signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      closeModalSI();
      
      signinForm.reset();
      signinForm.querySelector('.message-error').innerHTML = "";
    })
     .catch((error) =>{
      const errorCode = error.code
      const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found') {
        signinForm.querySelector('.message-error').innerHTML = 'El Usuario no se encuentra registrado'
      } else if (errorCode === 'auth/wrong-password') {
        signinForm.querySelector('.message-error').innerHTML = 'La Contraseña no corresponde al usuario'
      } else {
        signinForm.querySelector('.message-error').innerHTML = errorMessage; //mensajes por defecto de los otros posibles errores
      }
      });  
     
     console.log('signIn')
});

//LOGOUT 
const logout = document.getElementById('salir');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then( () => {
     console.log('sign out')
  })
});

//GOOGLE LOGIN
const googleButton = document.getElementById('entrarGoogle')
googleButton.addEventListener('click', e => {

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      closeModalSI();
      console.log('sign in Google')
      signinForm.querySelector('.message-error').innerHTML = '';
    })
    .catch((error) => {
      const errorMessage = error.message;
      signinForm.querySelector('.message-error').innerHTML = errorMessage; //mensajes por defecto de los otros posibles errores
    })
});

  



