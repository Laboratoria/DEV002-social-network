/* eslint-disable no-console */
// import { onNavigate, next } from '../main.js';
// import { inicioDeSesionEmail } from './inicioDeSesionCorreo';
// import { signInWithGoogle } from '../firebase/singInGoogle.js';
import { authGoogle, inicioDeSesionEmail } from '../firebase/configuracion.js';
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
  document.addEventListener('DOMContentLoaded', () => {
    const logInButton = document.getElementById('ingresar');
    logInButton.addEventListener('click', (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const alertLogin = (valid) => {
        if (valid) {
          next('/timeLine');
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      };
      inicioDeSesionEmail(email, password, alertLogin);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const googleButton = document.getElementById('inicio-sesion-google');
    googleButton.addEventListener('click', async (event) => {
      event.preventDefault();
      await authGoogle();
    });
  });
  return divLogin;
};

export default Login;
