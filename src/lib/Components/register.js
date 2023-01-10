import { onNavigate } from "../../main.js"

export const register = () => {
    const divRegister = document.createElement('div');
    divRegister.setAttribute('class', 'container-div-register');
    const viewRegister = `
  <img src='images/logo.png' alt='logoReading' class='img-logo'>
  <p> Crea tu cuenta </p> 
  <form id='formRegister'>
   <div class='input-register'>
        <input type='text' id='name-register' placeholder='Nombre'>
        <input type='email' id='email-register' placeholder='Correo electronico'>
        <input type='password' id='password-register' placeholder='Contraseña'>
      <div id='modalContent'>
      </div>
   </div>       
    </form> 
    <div id='errorMessageRegister'></div>
    <div class='div-register'>
    <p>O registrate con</p>
    <button type='button' class='btn-google'>
    <img src='images/googleLogo.png' id='img-google'>
    </button>
    </div>`;
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