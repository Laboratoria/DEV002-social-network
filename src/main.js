// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, onAuthStateChanged,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

function container () {
  let ul = document.createElement('ul')
  ul.className = 'registros'
  containerRegister.appendChild('ul')
  ul.innerHTML += `
  <div>
  <h2>Sign in</h2>
  <form id="formularioSI">
    <div class="email" id="correo">
      <label for="correo"></label>
      <input type="email" name="correo" id="idCorreoSI" placeholder="Email" required>
    </div>
    <div class="password">
      <label for="contraseña"></label>
      <input type="password" name="contraseña" id="idContraseñaSI" placeholder="Password" required>
    </div>
    <button type="submit" class="btnSubmit" id="btnEnviarSI">Submit</button>
 `
}
 let login = document.getElementById('botonLoguear')
 login.addEventListener('click', (e) =>{
  preventDefault(e)
  const ingresar = container()
  login.appendChild(ingresar)
 
})
 


export function validarCorreo(correo) {
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let valido = expReg.test(correo);
  console.log(valido);
  if (valido === true) {
    console.log('valido');
    return true;
  } if (valido === false) {
    console.log('invalido');
    return false;
  }
}
onAuthStateChanged(auth);



// SIGN UP
const signupForm = document.getElementById('formularioSU');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // para cancelar el evento de reinicio del formulario
  const valorCorreo = document.getElementById('idCorreoSU').value;
  const posiblcorreo = validarCorreo(valorCorreo);
  let signupEmail = '';
  if (posiblcorreo === true) {
    signupEmail = valorCorreo;
  } else {
    signupEmail = '';
  }
  const signupPassword = document.getElementById('idContraseñaSU').value;
  closeModalSU();
  signupForm.reset();
  signupForm.querySelector('.message-error').innerHTML = '';
})

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    // personalizando los mensajes de los 2 errores mas comunes//
    if (errorCode === 'auth/email-already-in-use') {
      signupForm.querySelector('.message-error').innerHTML = 'El email ya se encuentra registrado'
    } else if (errorCode === 'auth/weak-password') {
      signupForm.querySelector('.message-error').innerHTML = 'La contraseña debe tener al menos 6 carácteres'
    } else {
      signupForm.querySelector('.message-error').innerHTML = errorMessage; // mensajes por defecto de los otros posibles errores
    }
  });
createUserWithEmailAndPassword(auth);
// console.log(signupEmail,signupPassword)
console.log('signUp');



// SIGN IN

const signinForm = document.getElementById('formularioSI');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('idCorreoSI').value;
  const password = document.getElementById('idContraseñaSI').value;

     sendEmailVerification(auth);
      signinForm.reset();
      signinForm.querySelector('.message-error').innerHTML = '';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found') {
        signinForm.querySelector('.message-error').innerHTML = 'El Usuario no se encuentra registrado';
      } else if (errorCode === 'auth/wrong-password') {
        signinForm.querySelector('.message-error').innerHTML = 'La Contraseña no corresponde al usuario';
      } else {
        signinForm.querySelector('.message-error').innerHTML = errorMessage; // mensajes por defecto de los otros posibles errores
      }
    });

  console.log('signIn');
signInWithEmailAndPassword(auth);

// LOGOUT
export const logout = document.getElementById('salir');
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('sign out');
  })
});

// GOOGLE LOGIN
const googleButton = document.getElementById('entrarGoogle')
googleButton.addEventListener('click', e => {
  const provider = new GoogleAuthProvider();

 
      signinForm.querySelector('.message-error').innerHTML = '';
    })
    .catch((error) => {
      const errorMessage = error.message;

      // personalizando los mensajes de los 2 errores mas comunes
      if (errorCode === 'auth/user-not-found') {
        signinForm.querySelector('.message-error').innerHTML = 'El Usuario no se encuentra registrado'
      } else if (errorCode === 'auth/wrong-password') {
        signinForm.querySelector('.message-error').innerHTML = 'La Contraseña no corresponde al usuario'
      } else {
        signinForm.querySelector('.message-error').innerHTML = errorMessage; // mensajes por defecto de los otros posibles errores
      }
    });

    signInWithPopup(auth);
  
