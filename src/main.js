// Import the functions of Firestore for posting
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { init } from "./lib/firebase/config.js";
import { login, register,loginWithGoogle,verificarSendingMail } from "./lib/firebase/methods.js";
/*logout importar*/ 
init();
const auth = getAuth();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const modalSI = document.querySelector('#modalSI');
const modalSU = document.querySelector('#modalSU');

/* abrieno modal sign up */
const openModalSU = () => {
  modalSU.style.display = 'flex';
};

const closeModalSU = () => {
  modalSU.style.display = 'none';
};

const btnOpenModalSU = document.getElementById('botonRegistrar');
btnOpenModalSU.addEventListener('click', openModalSU);

const btnCloseModalSU = document.getElementById('botonCerrarModalSU');
btnCloseModalSU.addEventListener('click', closeModalSU);

// open-close modal Sing in
const openModalSI = () => {
  modalSI.style.display = 'flex';
};

const closeModalSI = () => {
  modalSI.style.display = 'none';
};
const btnOpenModalSI = document.getElementById('botonLoguear');
btnOpenModalSI.addEventListener('click', openModalSI);

const btnCloseModalSI = document.getElementById('botonCerrarModalSI');
btnCloseModalSI.addEventListener('click', closeModalSI);


// Initialize Cloud Firestore and get a reference to the service
//const fs = getFirestore(app);



function validarCorreo(correo) {
  const expReg = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const valido = expReg.test(correo);
  console.log(valido);
  if (valido === true) {
    console.log('valido');
    return true;
  } if (valido === false) {
    console.log('invalido');
    return false;
  }
}

// SIGN UP
const signupForm = document.getElementById('formularioSU');
signupForm.addEventListener('submit', async (e) => {
  let signupEmail = '';
  e.preventDefault(); // para cancelar el evento de reinicio del formulario
  const valorCorreo = document.getElementById('idCorreoSU').value;
  const posibleCorreo = validarCorreo(valorCorreo);
  if (posibleCorreo === true) {
    signupEmail = valorCorreo;
  } else {
    signupEmail = '';
  }
  const signupPassword = document.getElementById('idContraseñaSU').value;

  // función de Firebase para registrar un usuario
  try {
    const resultado = await register(auth, valorCorreo, signupPassword);
    verificarSendingMail(auth)
    console.log(resultado);
  verificarSendingMail(auth);
  signupForm.querySelector('.message-error').innerHTML = '';
}
  catch ({ code, message }) {
    console.log(message);
    // personalizando los mensajes de los 2 errores mas comunes
    if (code === 'auth/email-already-in-use') {
      signupForm.querySelector('.message-error').innerHTML = 'El Email ya se encuentra registrado'
    } else if (code === 'auth/weak-password') {
      signupForm.querySelector('.message-error').innerHTML = 'La Contraseña debe tener al menos 6 carácteres'
    } else {
      signupForm.querySelector('.message-error').innerHTML = message; // mensajes por defecto de los otros posibles errores
    }
  }
     console.log('signUp');
});



// SIGN IN

const signinForm = document.getElementById('formularioSI');
signinForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('idCorreoSI').value;
  const passwordInput = document.getElementById('idContraseñaSI').value;
  try {
    const { emailVerified, email } = await login(auth, emailInput, passwordInput)
    
    //console.log(emailVerified,email);
    /* permitir acceder a la página a solo los usuarios que hayan verificado su cuenta a través del cooreo electrónico enviado */
    if (emailVerified) {
      console.log('Bienvenid@', email);
    } else {
    
      auth.signOut();
      console.log('Por favor realiza la verificación de tu cuenta');
    }
    // console.log(emailVerified) /* verificando el observador */

    closeModalSI();

    signinForm.reset();
    signinForm.querySelector('.message-error').innerHTML = '';

  } catch ({ code, message }) {
    // console.log('error', error.message, error.code, error.response)

    if (code === 'auth/user-not-found') {
      signinForm.querySelector('.message-error').innerHTML = 'El Usuario no se encuentra registrado';
    } else if (code === 'auth/wrong-password') {
      signinForm.querySelector('.message-error').innerHTML = 'La Contraseña no corresponde al usuario';
    } else {
      signinForm.querySelector('.message-error').innerHTML = message; //mensajes por defecto de los otros posibles errores
    }
  }

  console.log('signIn');
});

// LOGOUT
/*const logout = document.getElementById('salir');
logout.addEventListener('click', () => {
  logOut(auth)
 
});*/

// GOOGLE LOGIN
const googleButton = document.getElementById('entrarGoogle')
googleButton.addEventListener('click', (e) => {
 e. preventDefault();
   loginWithGoogle(auth);
   closeModalSI();
   signinForm.reset();
});



