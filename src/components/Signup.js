import { registrar } from '../app/register.js';

//creamos la función Home que va a contener una variable que será un div que será el resultado que vamos a devolver
export const Signup = () => {
    //creamos un div para poderle insertar los dos botones que creamos abajo y con esto poder darle un returny poderlo insertar la nodo
    const SignupDiv = document.createElement('div');
    const template = `
    <section class="register" id="register">
        <form class="register-form" id="registerForm">
        <div class="register-form-background">
            <input type="name" class="register-form-pet-name-input" id="registerFormPetNameInput" placeholder="Nombre de usuario" required />
            <input type="email" class="register-form-pet-email-input" id="registerFormPetEmailInput" placeholder="hola@petblr.com" required />
            <input type="name" class="register-form-user-name-input" id="registerFormUserNameInput" placeholder="Nombre del dueño" required />
            <input type="password" class="register-form-password-input" id="registerFormPasswordInput" placeholder="Contraseña" required />
            <label class="register-form-psw-recomendation" id="registerFormPswRecomendation">DEBE TENER MÍNIMO 6 CARÁCTERES, UNA MAYÚSCULA Y UN NÚMERO</label>
            <input type="password" class="register-form-repeat-password-input" id="registerFormRepeatPasswordInput"placeholder="Repetir contraseña" required />
            <label class="register-form-repeat-psw hidden" id="registerFormRepeatPsw"> LAS CONTRASEÑAS DEBEN COINCIDIR</label>
            <button class="register-div-btn" id="registerDivBtn">REGISTRARSE</button>
            </div>
            </form>
    </section>
    <section class="auth-error hidden" id="authError">
        <div class="auth-error-div">
            <h1 class="auth-error-text">Lo sentimos, correo en uso.</h1>
        </div>
    </section>
    <section class="auth-funciona hidden" id="authFunciona">
        <div class="auth-error-div">
            <h1 class="auth-funciona-text">Correo de confirmación enviado</h1>
        </div>
    </section>
    `
    SignupDiv.innerHTML = template 
    // al Div debemos crearle los eventos querySelector.
    SignupDiv.querySelector('#registerDivBtn').addEventListener('click', registrar)

    // //se crean los botones y le damos de una vez el texto que vamos a mostrar
    
    // const buttonRegister = document.createElement ('button');
    // buttonRegister.textContent= 'inicia sesión';

    // const buttonLogin = document.createElement ('button');
    // buttonLogin.textContent= 'Regístrate'; 

    // para poder retornar los botones en un sólo div (empacamos en una "caja")
   //div.append(buttonRegister,buttonLogin);
   //retornamos los botones que metimos en el div
    return SignupDiv;
}