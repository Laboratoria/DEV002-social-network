import { onNavigate } from "../../main.js";

export const home = () => {
    const divHome = document.createElement('div');
        divHome.setAttribute('class', 'div-home');
        const viewHome = `
        <img src='./images/logo.png' alt='logoReading' class='img-logo'>
        <form id='formLogin'> 
        <div class='input-login'>
          <input type='email' id='email' placeholder='Correo@ejemplo.com'>
          <input type='password' id='password' placeholder='Contraseña'>
        </div>
      </form>
        <div class='div-login'>
        <p>O inicia sesión con</p>
        <button type='button' class='btn-google'>
        <img src='./images/googleLogo.png' id='img-google'></button>
        </div>`;
        <img src='./images/google.png' id='img-google'></button>
        </div>
        </div>
        <footer> © ️2022 desarrollado por Sandra, Laura B. y Laura G.</footer>`;
        divHome.innerHTML = viewHome;

    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Crear cuenta';
    buttonLogin.textContent = 'Iniciar sesion';

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    divHome.appendChild(buttonRegister);
    divHome.appendChild(buttonLogin);

    return divHome;
}