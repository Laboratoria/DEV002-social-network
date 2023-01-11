import { onNavigate } from '../main.js';

export const Register = () => { 
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister =
  `
<div class="containerRegister" id="containerRegister"> 
    <figure class="logo-inicio-sesion"> 
      <img class= "logo" src="./images/logo.png" alt="Imagen de un avión dando la vuelta al mundo">
    </figure>

  <section class="section-register" id="sectionOne">   

    <h1 class="title">Journey Mates 🛫 </h1>

    <h2 class="inicia-sesion-h2">Regístrate</h2>

    <img class="logo-google" id="registrate-google" src="./images/google buttons/google_signin_buttons/web/2x/1.google-button.png" alt="">
    <p class="or">O</p>

    <input type="name" placeholder="Nombre completo*" autocomplete="name" required> <br>
    <input id="emailRegister" type="email" placeholder="Correo electrónico*" autocomplete="email" required> <br>
    <input id="passwordRegister" type="password" placeholder="Contraseña*" autocomplete="current-password" required> <br>

    <div class="container-paises"> 
      <label for="paises" class="lista-paises"> País de procedencia * </label> <br>
      <select id="paises" class="paises" name="paises" required>
        <option value="">Elige un país</option>
        <option value="ARG">Argentina</option>
        <option value="BRA">Brasil</option>
        <option value="CHL">Chile</option>
        <option value="COL">Colombia</option>
        <option value="ECU">Ecuador</option>
        <option value="MEX">México</option>
        <option value="PRY">Paraguay</option>
        <option value="PER">Perú</option>
        <option value="URY">Uruguay</option>
        <option value="VEN">Venezuela</option>
      </select> 
    </div>

    <label class="fecha-nacimiento" for='fecha-nacimiento'> Fecha de nacimiento * </label> <br>
    <input type="date" placeholder="dd/mm/aaaa" class="fecha-nacimiento" required>

    <h3 class="gender">Género * </h3>
    <label for='femenino'> Femenino </label>
    <input type="radio" name="genero" id='genero' class="seleccionar-genero" required>

    <label class="seleccionar-genero" for='masculino'> Masculino </label>
    <input type="radio" name="genero" id='genero' class="seleccionar-genero" required> <br>

    <button class="ingresar" id="register-button"> Registrar </button>

  </section>`

  divRegister.innerHTML = viewRegister;
  const buttonFinalRegister = document.createElement('button');
  const buttonHome = document.createElement('button');

  buttonFinalRegister.textContent = 'Crear cuenta'
  buttonFinalRegister.addEventListener('click', () => onNavigate('/login'));

  buttonHome.textContent = 'Volver al inicio';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  divRegister.appendChild(buttonHome);
  divRegister.appendChild(buttonFinalRegister);

  return divRegister;
};


