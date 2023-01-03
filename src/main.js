// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const auth = getAuth();

//construyendo un observador de Auth 
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var email = user.email;
    const uid = user.uid;   //código único del usuario asignado por Firebase

    //El usuario se encuentra logueado
    console.log('auth:sign in');

    var emailVerified = user.emailVerified;
    if (emailVerified === false) {
      console.log('Email no verificado');
    } else {
      console.log('Email verificado');
    }
    // ...
  } else {
    //el suusario no se encuentra logueado
    console.log('auth: log out')
  }
});



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



function verificarSendingMail() {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    })
}


//SIGN UP
const signupForm = document.getElementById('formularioSU');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); //para cancelar el evento de reinicio del formulario
  const valorCorreo = document.getElementById('idCorreoSU').value;
  const posibleCorreo = validarCorreo(valorCorreo);
  var signupEmail = '';
  if (posibleCorreo === true) {
    signupEmail = valorCorreo;
  } else {
    signupEmail = '';
  }
  const signupPassword = document.getElementById('idContraseñaSU').value;


  //función de Firebase para registrar un usuario

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then((userCredential) => {

      const user = userCredential.user;

      //actualizar los datos
      // user.updateProfile({
      //   displayName: nombres
      // }) 

      verificarSendingMail();
      alert('por favor verifica el buzón de tu correo para verificar tu cuenta');

      closeModalSU();
      signupForm.reset();
      signupForm.querySelector('.message-error').innerHTML = "";

    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message;

      //personalizando los mensajes de los 2 errores mas comunes
      if (errorCode === 'auth/email-already-in-use') {
        signupForm.querySelector('.message-error').innerHTML = 'El Email ya se encuentra registrado'
      } else if (errorCode === 'auth/weak-password') {
        signupForm.querySelector('.message-error').innerHTML = 'La Contraseña debe tener al menos 6 carácteres'
      } else {
        signupForm.querySelector('.message-error').innerHTML = errorMessage; //mensajes por defecto de los otros posibles errores
      }
    });

  // console.log(signupEmail,signupPassword)
  console.log('signUp');
})


//SIGN IN

const signinForm = document.getElementById('formularioSI');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('idCorreoSI').value;
  const password = document.getElementById('idContraseñaSI').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      /* permitir acceder a la página a solo los usuarios que hayan verificado su cuenta a través del cooreo electrónico enviado */
      if (user.emailVerified) {
        //Materialize.toast(`Bienvenido ${user.displayName}`, 5000)
        console.log('Bienvenid@')
      } else {
        auth.signOut()
        //  Materialize.toast(`Por favor realiza la verificación de tu cuenta `, 5000)
        console.log('Por favor realiza la verificación de tu cuenta')
      }

      closeModalSI();

      signinForm.reset();
      signinForm.querySelector('.message-error').innerHTML = "";
    })
    .catch((error) => {
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
  auth.signOut().then(() => {
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







