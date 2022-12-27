// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQKOcN9jLUCxn2zXz-mkJKV-BaeFjcKvo",
  authDomain: "redsocialnvj-47db7.firebaseapp.com",
  projectId: "redsocialnvj-47db7",
  storageBucket: "redsocialnvj-47db7.appspot.com",
  messagingSenderId: "161909447570",
  appId: "1:161909447570:web:69157c48f89e6889947f4b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

/* ariendo modal sign in */
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

/* auth user */
const signupForm = document.getElementById('formularioSU');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailSU = document.getElementById('idCorreoSU').value
  const passwordSU = document.getElementById('idContraseñaSU').value


  createUserWithEmailAndPassword(auth, emailSU, passwordSU)
    .then((userCredential) => {
      userCredential.user;

    })
  signupForm.reset();
  console.log('sign up')

  closeModalSU();
});

/* sing in - login*/

const signinForm = document.getElementById('formularioSI');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailSI = document.getElementById('idCorreoSI').value
  const passwordSI = document.getElementById('idContraseñaSI').value


  signInUserWithEmailAndPassword(auth, emailSI, passwordSI)
    .then((userCredential) => {

      const user = userCredential.user;
    })
  signupForm.reset();
  console.log('sign in')


  closeModalSI();
});





