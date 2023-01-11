import { onNavigate } from "../../main.js";
import { signIn, signInGoogle} from '../index.js';

export const home = () => {
    const divHome = document.createElement('div');
    divHome.setAttribute('class', 'div-home');
    const viewHome = `
        <img src='./images/logo.png' alt='logoReading' class='img-logo'>
        <div class='input-login'>
        <p>Inicia sesión</p>
          <input type='email' id='email' placeholder='Correo@ejemplo.com'required>
          <input type='password' id='password' placeholder='Contraseña'required>
      <div id='errorLogin'></id>
        <div class='div-login'>
        <p>Acceder con:</p>
        <button type='button' class='btn-google'>
        <img src='./images/btnGoogle.png' id='img-google'></button>
        </div>
        </div>
        <footer> © 2022 desarrollado por Sandra, Laura B. y Laura G.</footer>`;

    divHome.innerHTML = viewHome;

    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
   
    buttonRegister.textContent = 'Crear cuenta';
    buttonLogin.textContent = 'Iniciar sesion';
    buttonRegister.setAttribute('id', 'btnRegister')
    buttonLogin.setAttribute('id', 'btnLogin')

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    // buttonLogin.addEventListener('click', () => onNavigate('/login'));

    divHome.appendChild(buttonRegister);
    divHome.appendChild(buttonLogin);

    const btnGoogle = divHome.querySelector('.btn-google')
    btnGoogle.addEventListener('click', () => {
        signInGoogle(onNavigate);
    });
    const btnLogin = divHome.querySelector('#btnLogin')
    btnLogin.addEventListener('click', () => {
    const email = document.querySelector ('#email').value;
    const password = document.querySelector ('#password').value;

    signIn (email, password)
    .then(() => {    
    onNavigate('/dashboard');
    })
    .catch((error) => {
        if (error.code === 'auth/invalid-email'){
            document.querySelector('#errorLogin').innerHTML = 'Correo no válido';
        } else if (error.code === 'auth/user-not-found'){
            document.querySelector('#errorLogin').innerHTML = 'Correo no registrado';
        }
    });
    });

    divHome.append(
        btnGoogle, 
        btnLogin,
    );


    return divHome;
};