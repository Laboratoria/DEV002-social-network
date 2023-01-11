// import { onNavigate } from "../../main.js";
 import { registerUser } from '../firebase/configuracion.js';

//  const indexRegistro = document.getElementById('containerRegister');
//  const indexInicioSesion = document.getElementById('container');
//  const btnRegistrate = document.getElementById('registrate');
 
//  const registerButton = document.getElementById('register-button');
//  registerButton.addEventListener('click', () => {
//    console.log("click se ejecutó")
//    const email = document.getElementById('emailRegister').value;
//    const password = document.getElementById('passwordRegister').value;
//    registerUser(email, password);
//  });

document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById('register-button');
  registerButton.addEventListener('click', () => {
      console.log("click se ejecutó")
      const email = document.getElementById('emailRegister').value;
      const password = document.getElementById('passwordRegister').value;
      registerUser(email, password);
  });
});


export const Register = () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister =  `<div class="containerRegister" id="containerRegister"> 
  <figure class="logo-inicio-sesion"> 
    <img class="logo" src="./images/logo.png" alt="Imagen de un avión dando la vuelta al mundo">
  </figure>

<section class="section-register" id="sectionOne">   

  <h1 class="title">Journey Mates 🛫 </h1>

  <h2 class="inicia-sesion-h2">Regístrate</h2>

  <img class="logo-google" id="registrate-google" src="./images/google buttons/google_signin_buttons/web/2x/1.google-button.png" alt="">
  <p class="or">O</p>
  <form> 
  <input type="name" placeholder="Nombre completo*" autocomplete="name" required> <br>
  <input id="emailRegister" type="email" placeholder="Correo electrónico*" autocomplete="email" required> <br>
  <input id="passwordRegister" type="password" placeholder="Contraseña*" autocomplete="current-password" required> <br>

  <div class="container-paises"> 
    <label for="paises" class="lista-paises"> País de procedencia * </label> <br>
    <select id="paises" class="paises" name="paises" required>
      <option value="">Elige un país</option>
      <option value="Argentina">Argentina</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Brasil">Brasil</option>
      <option value="Chile">Chile</option>
      <option value="Colombia">Colombia</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Cuba">Cuba</option>
      <option value="Ecuador">Ecuador</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Honduras">Honduras</option>
      <option value="México">México</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Panamá">Panamá</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Perú">Perú</option>
      <option value="República Dominicana">República Dominicana</option>
      <option value="Uruguay">Uruguay</option>
      <option value="Venezuela">Venezuela</option>
    </select> 
  </div>

    <label class="fecha-nacimiento" for='fecha-nacimiento'> Edad * </label> <br>
    <input type="number" class="fecha-nacimiento" required> <br>
    <button class="ingresar" id="register-button"> Registrar </button>
  </form>
</section> </div>`
//Este es el punto de entrada de tu aplicacion
// import { GoogleAuthProvider } from "firebase/auth";




divRegister.innerHTML = viewRegister;
return divRegister;

};

export default Register

//  export const Home = () =>{
//     const HomeDiv= document.createElement("div");
//     const botonRegistro=document.createElement("button");
//     const botonIniciar=document.createElement("button");
//     botonRegistro.textContent = 'Registrate';
//     botonIniciar.textContent = 'Inicia sesión';

//     HomeDiv.appendChild(botonIniciar);
//     HomeDiv.appendChild(botonRegistro);

//     return HomeDiv;
// };