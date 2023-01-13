import { onNavigate } from '../main.js';
import { inicioDeSesionEmail} from '../pages/inicioDeSesionCorreo.js'
import { next} from '../main.js'


document.addEventListener("DOMContentLoaded", function() {
  const logInButton = document.getElementById('ingresar');
  logInButton.addEventListener('click', (event) => {
      event.preventDefault()
      console.log("click se ejecutó")
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
     inicioDeSesionEmail (email, password);
  });
});

export const Login = () => { 
  const divLogin = document.createElement('div');
  divLogin.setAttribute('id', 'container-div-login');
  const viewLogin =
  `
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
  
`
  
  divLogin.innerHTML = viewLogin;

  const signUpBtn = divLogin.querySelector('#ingresar');
  signUpBtn.addEventListener('click', () => {
    next('/timeLine');
  });



  return divLogin;
};

export default Login



  // const buttonFinalLogin = document.createElement('button');
  // const buttonHome = document.createElement('button');

  // buttonFinalRegister.textContent = 'Iniciar sesión'
  // buttonFinalRegister.addEventListener('click', () => onNavigate('/login'));

  // // buttonHome.textContent = 'Volver al inicio';
  // // buttonHome.addEventListener('click', () => onNavigate('/'));

  // divRegister.appendChild(buttonHome);
  // divRegister.appendChild(buttonFinalRegister);

  