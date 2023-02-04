/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
// import { onNavigate, next } from '../main.js';
// import { inicioDeSesionEmail } from './inicioDeSesionCorreo';
// import { signInWithGoogle } from '../firebase/singInGoogle.js';
import { authGoogle, signInWithEmailAndPassword, auth } from '../firebase/configuracion.js';
// eslint-disable-next-line import/no-cycle
import { next } from '../main.js';

export const Login = () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('id', 'container-div-login');
  const viewLogin = `
<div class="container" id="container"> 
  <figure class="logo-inicio-sesion"> 
    <img class="logo" src="./images/logo.png" alt="Imagen de un avión dando la vuelta al mundo">
  </figure>
  
  <section class="section-inicio-sesion" id="sectionOne">   
    <form> 
      <h1 class="title">Journey Mates 🛫 </h1>
      <h2 class="inicia-sesion-h2">Inicia sesión</h2>
      <img class="logo-google" id="inicio-sesion-google" src="./images/google buttons/google_signin_buttons/web/2x/1.google-button.png" alt="">
      <p class="or">O</p>
      <input id="email" type="email" placeholder="Correo electrónico*" autocomplete="email" required> <br>
      <input id="password" type="password" placeholder="Contraseña*" autocomplete="current-password" required> <br>
     
      <a href= "/timeLine">
        <button class="ingresar" id="ingresar"> Ingresar </button>
      </a>
    </form> 
   
    <p>¿Aún no tienes una cuenta?</p>
    <a href= "/register"> 
        <button class="registrate" id="registrate"> Regístrate </button>
    </a>
  </div>
  </section>
  
`;
  divLogin.innerHTML = viewLogin;
  document.addEventListener('DOMContentLoaded', async () => {
    const logInButton = document.getElementById('ingresar');
    logInButton.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('click se ejecutó');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('signed in');
    const user = userCredential.user;
    const userId = user.uid;
    console.log(user, userId);
      next('/timeLine');
      location.reload();
    } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
    alert('Este correo ya está registrado');
    } else if (error.code === 'auth/weak-password') {
    alert('Tu contraseña no es segura');
    } else if (error.code === 'auth/invalid-email') {
    alert('Este correo no existe o es inválido');
    } else if (error.code === 'auth/internal-error') {
    alert('Completa todos los campos');
    }
    }
    });
    });

  document.addEventListener('DOMContentLoaded', () => {
    const googleButton = document.getElementById('inicio-sesion-google');
    googleButton.addEventListener('click', async (event) => {
      event.preventDefault();
      // console.log('click botón google');
      await authGoogle();
    });
  });
  return divLogin;
};

export default Login;
