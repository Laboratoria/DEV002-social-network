import { onNavigate } from "../../main.js";
import { signUp, signInGoogle } from '../router.js';

export const home = () => {
    const divHome = document.createElement('div');
        divHome.setAttribute('class', 'div-home');
        const viewHome = `
        <img src='./images/logo.png' alt='logoReading' class='img-logo'>
        <form id='formLogin'> 
        <div class='input-login'>
        <p>Inicia sesión en ReadingClub</p>
          <input type='email' id='email' placeholder='Correo@ejemplo.com'required>
          <input type='password' id='password' placeholder='Contraseña'required>
      </form>
        <div class='div-login'>
        <p>O inicia sesión con</p>
        <button type='button' class='btn-google'>
        <img src='./images/google.png' id='img-google'></button>
        </div>
        </div>
        <footer> © ️2022 desarrollado por Sandra, Laura B. y Laura G.</footer>`;
        divHome.innerHTML = viewHome;

    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
   
    buttonRegister.textContent = 'Crear cuenta';
    buttonLogin.textContent = 'Iniciar sesion';
    buttonRegister.setAttribute('id', 'btnRegister')
    buttonLogin.setAttribute('id','btnLogin')

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    divHome.appendChild(buttonRegister);
    divHome.appendChild(buttonLogin);

    const btnLogin = divHome.querySelector('.btn-google')
    btnLogin.addEventListener('click', () => {
        signInGoogle(onNavigate);
    });

    divHome.append(
        btnLogin
    );


    return divHome;
}