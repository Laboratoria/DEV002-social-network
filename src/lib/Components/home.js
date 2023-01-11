import { onNavigate } from "../../main.js";
import { signUp, signInGoogle, authLogin } from '../router.js';

export const home = () => {
    const divHome = document.createElement('div');
    divHome.setAttribute('class', 'div-home');
    const viewHome = `
        <img src='./images/logo.png' alt='logoReading' class='img-logo'>
        <form id='formLogin'> 
        <div class='input-login'>
        <p>Inicia sesión</p>
          <input type='email' id='email' placeholder='Correo@ejemplo.com'required>
          <input type='password' id='password' placeholder='Contraseña'required>
      </form>
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
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    divHome.appendChild(buttonRegister);
    divHome.appendChild(buttonLogin);

    const btnLogin = divHome.querySelector('.btn-google')
    btnLogin.addEventListener('click', () => {
        signInGoogle(onNavigate);
    });

    const btnRegister = divHome.querySelector('#btnRegister');
    btnRegister.addEventListener('click', () => {
        const userEmail = divHome.querySelector('#email').value;
        const userPass = divHome.querySelector('#password').value;
        signUp(userEmail, userPass)
            .then(() => {
                onNavigate('/login');
            })
        // .catch((error) => {
        //     if (errorcode === 'auth/email-already-in-use') {
        //         document.querySelector('#errorLogin').innerHTML = 'Este correo ya está registrado';
        //       } else if (error.code === 'auth/invalid-email') {
        //         document.querySelector('#errorLogin').innerHTML = 'El correo que ingresaste es inválido';
        //       } else if (error.code === 'auth/weak-password') {
        //         document.querySelector('#errorLogin').innerHTML = 'Tu clave tiene que tener un mínimo de seis dígitos';
        //       } else if (error.code) {
        //         document.querySelector('#errorLogin').innerHTML = 'Revisa los datos ingresados, algo no está bien';
        //       }
        //     });
    });

    divHome.append(
        btnLogin,
        btnRegister
    );

    return divHome;
};