import { type } from "os";

const login = () => {
    const containerLogin = document.createElement('div');
    containerLogin.setAttribute('class','container');
     const viewLogin = `
     <img src="src/images/logo.png" class='logoRc'>
     <div class='formLogin'>
        <input type='email' placeholder='correoelectronico@gmail.com'> 
        <input type='password' placeholder='contraseña'>
    </div>
    <button type='button'> Iniciar sesión </button>
    <p> o inicia sesión con </p>
    <button type='button'>
    <img src="src/images/googleLogo.png">
    </button>
    <button type='button'>Crear cuenta </button>`
    containerLogin.innerHTML=viewLogin;
    console.log();
};
