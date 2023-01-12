// Este es el punto de entrada de tu aplicacion
import {crearUsuarioEP, loguearUsuarioEP, logOut} from './firebase.js';
import { myFunction } from './lib/index.js';
myFunction();
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// declaración de variables para el manejo del DOM

const modalSI = document.querySelector('#modalSI');
const modalSU = document.querySelector('#modalSU');

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

function validarCorreo(correo) {
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let valido = expReg.test(correo);
  console.log(valido);
  if (valido === true) {
    console.log('valido')
    return true;
  } if (valido === false) {
    console.log('invalido')
    return false;
  }
}
const valorCorreo = document.getElementById('idCorreoSU').value;
//SIGN UP
const signupForm = document.getElementById('formularioSU');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); //para cancelar el evento de reinicio del formulario
  const posibleCorreo = validarCorreo(valorCorreo);
  var signupEmail = '';
  if (posibleCorreo === true) {
    signupEmail = valorCorreo;
  } else {
    signupEmail = '';
  }
  
  const valorPassword = document.getElementById('idContraseñaSU').value;
  // registrar usuario con firebase
  let errorMessage = '';
  console.log(valorCorreo, valorPassword);
  crearUsuarioEP(valorCorreo, valorPassword).then(data => console.log(data)).catch(error => {
    errorMessage = error
    console.log(error.message);
    console.log(error.code);

  } );


  console.log('signUp');
});
let mensajeErrorSU = signupForm.querySelector('.message-error').innerHTML;

//SIGN IN

const signinForm = document.getElementById('formularioSI');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('idCorreoSI').value;
  const password = document.getElementById('idContraseñaSI').value;
  loguearUsuarioEP(email, password);
});
  
export let mensajeErrorSI = signinForm.querySelector('.message-error').innerHTML = "";

//LOGOUT 
const logout = document.getElementById('salir');
logout.addEventListener('click', e => {
  e.preventDefault();

  logOut(auth);
  // auth.signOut().then(() => {
  //   console.log('sign out')
  // })
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

      //personalizando los mensajes de los 2 errores mas comunes
      if (errorCode === 'auth/user-not-found') {
        signinForm.querySelector('.message-error').innerHTML = 'El Usuario no se encuentra registrado'
      } else if (errorCode === 'auth/wrong-password') {
        signinForm.querySelector('.message-error').innerHTML = 'La Contraseña no corresponde al usuario'
      } else {
        signinForm.querySelector('.message-error').innerHTML = errorMessage; //mensajes por defecto de los otros posibles errores
      }
    });
  //console.log(email,password)

})







