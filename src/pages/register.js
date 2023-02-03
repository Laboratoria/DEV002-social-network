/* eslint-disable no-restricted-globals */
// import { onNavigate } from "../../main.js";
import { registerUser } from '../firebase/configuracion.js';
import { next } from '../main.js';

export const Register = () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister = `<div class="containerRegister" id="containerRegister">
  <figure class="logo-inicio-sesion">
   <img class="logo" src="./images/logo.png" alt="Imagen de un avión dando la vuelta al mundo">
  </figure>
  <section class="section-register" id="sectionOne">
    <h1 class="title">Journey Mates 🛫 </h1>
    <h2 class="inicia-sesion-h2">Regístrate</h2>
  <form id="userForm">
      <input type="name" id="name-usuaria" class="name" placeholder="Nombre completo*" autocomplete="name" required> <br>
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
  <div class="container-paises">
    <label for="paises" class="lista-paises"> País actual * </label> <br>
    <select id="paisActual" class="paises" name="paises" required>
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
  <a href="/timeLine">
    <button class="ingresar" id="register-button"> Registrar </button>
    </a>
  </form>
</section> </div>`;
  divRegister.innerHTML = viewRegister;
  document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('register-button');
    registerButton.addEventListener('click', (event) => {
      event.preventDefault();
      // console.log('click register se ejecutó');
      const email = document.getElementById('emailRegister').value;
      const password = document.getElementById('passwordRegister').value;
      const nombreUsuaria = document.getElementById('name-usuaria').value;
      const pais = document.getElementById('paises').value;
      const alertRegister = (valid) => {
        if (valid) {
          next('/timeLine');
          location.reload();
        }
      };
      registerUser(email, password, nombreUsuaria, pais, alertRegister);
    });
  });
  return divRegister;
};
export default Register;









