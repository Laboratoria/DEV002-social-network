import { createUser, signInGoogle } from '../index.js';
import { onNavigate } from '../../main.js';

export const register = () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'container-div-register');
  const viewRegister = `
  <img src='images/logo.png' alt='logoReading' class='img-logo'>
   <div class='input-register'>
   <p> Crea tu cuenta </p> 
        <input type='text' id='name-register' placeholder='Nombre'>
        <input type='email' id='email-register' placeholder='Correo electronico'>
        <input type='password' id='password-register' placeholder='Contraseña'>
   </div>       
    <div id='errorMessageRegister'></div>
    <div class='div-register'>
    <button type='button' class='btn-google'>
    <img src='images/btnGoogle.png' id='img-google'>
    </button>
    </div>
    <footer class='footInit'> © 2022 desarrollado por Sandra, Laura B. y Laura G.</footer>`;
  divRegister.innerHTML = viewRegister;
  const buttonFinalRegister = document.createElement('button');
  const buttonHome = document.createElement('button');

  buttonFinalRegister.textContent = 'Crear cuenta';
  buttonFinalRegister.setAttribute('id', 'btnFinal');

  buttonHome.textContent = 'Volver al inicio';
  buttonHome.setAttribute('id', 'btnReturn');
  buttonHome.addEventListener('click', () => onNavigate('/'));

  divRegister.appendChild(buttonHome);
  divRegister.appendChild(buttonFinalRegister);

  const btnLoginGoogle = divRegister.querySelector('.btn-google');
  btnLoginGoogle.addEventListener('click', () => {
    signInGoogle(onNavigate);
  });

  const btnFinal = divRegister.querySelector('#btnFinal');
  btnFinal.addEventListener('click', () => {
    const userName = document.querySelector('#name-register').value;
    const userEmail = document.querySelector('#email-register').value;
    const userPassword = document.querySelector('#password-register').value;

    createUser(userEmail, userPassword, userName)
      .then(() => {
        onNavigate('/dashboard');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          document.querySelector('#errorMessageRegister').innerHTML = 'Éste correo ya está registrado';
        } else if (error.code === 'auth/invalid-email') {
          document.querySelector('#errorMessageRegister').innerHTML = 'Correo inválido';
        } else if (error.code === 'auth/invalid-password') {
          document.querySelector('#errorMessageRegister').innerHTML = 'Tu clave tiene que tener un mínimo de seis dígitos';
        }
      });
  });

  divRegister.append(
    btnFinal,
  );

  return divRegister;
};
