import { onNavigate } from "../../main.js";
import { signIn, signInGoogle, authLogin } from '../router.js';

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

    const btnLogin = divHome.querySelector('.btn-google')
    btnLogin.addEventListener('click', () => {
        signInGoogle(onNavigate);
    });

    const btnRegister = divHome.querySelector('#btnRegister');
    btnRegister.addEventListener('click', () => {
        const userEmail = divHome.querySelector('#email').value;
        const userPassword = divHome.querySelector('#password').value;
        signIn(userEmail, userPassword)
            .then(() => {
                onNavigate('/login');
            })
        .catch((error) => {
            if (errorcode === 'auth/wrong-password') {
                document.querySelector('#errorLogin').innerHTML = 'Contraseña incorrecta';
              } else if (error.code === 'auth/invalid-email') {
                document.querySelector('#errorLogin').innerHTML = 'Correo invalido';
              } else if (error.code === 'auth/user-not-found') {
                document.querySelector('#errorLogin').innerHTML = 'Correo no resgistrado';
              } else if (error.code) {
                document.querySelector('#errorLogin').innerHTML = 'Algo fallo';
              }
            });
            authLogin();
    });


    divHome.append(
        btnLogin,
        btnRegister
    );

    return divHome;
};