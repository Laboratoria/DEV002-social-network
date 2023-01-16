/* eslint-disable import/no-unresolved */
import { registrar } from '../app/register.js';
import { onNavigate } from '../main.js';

export const Signup = () => {
    const SignupDiv = document.createElement('div');
    const template = `
        <section class="main-logo" id="mainLogo">
            <div class="main-logo-div">
            <img src="./Assets/logo.png"  alt="logo" class="main-logo-img" id="mainLogoImg" >
            </div>
        </section>
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
                <h1 class="auth-error-text" id="authErrorText">Lo sentimos, correo en uso.</h1>
            </div>
        </section>
        <section class="auth-funciona hidden" id="authFunciona">
            <div class="auth-error-div">
                <h1 class="auth-funciona-text">Correo de confirmación enviado</h1>
                <button class="email-confirmation-done-btn" id="emailConfirmationDoneBtn">ACEPTAR</button>
            </div>
        </section>
    `
    SignupDiv.innerHTML = template 
    SignupDiv.querySelector('#registerDivBtn').addEventListener('click', async (e) => {
        e.preventDefault();
        const registerForm = document.getElementById('registerForm');
        try {
            await registrar(registerForm)
            document.getElementById('registerFormRepeatPsw').classList.add('hidden');
            document.getElementById('registerFormRepeatPasswordInput').classList.remove('wrongAlert');
            document.getElementById('authFunciona').classList.remove('hidden')
        } catch (error) {
            switch (error) {
                case "wrong password":
                    document.getElementById('registerFormRepeatPsw').classList.remove('hidden');
                    document.getElementById('registerFormRepeatPasswordInput').classList.add('wrongAlert');                    
                    break;
                case "generic_failure":
                    document.getElementById('authErrorText').innerHTML = "Lo sentimos, los datos ingresados son inválidos."
                    document.getElementById('authError').classList.remove('hidden');
                    break;
                default:
                    document.getElementById('authError').classList.remove('hidden');
                    break;
            }
        }
    })
    SignupDiv.querySelector('#registerFormPasswordInput').addEventListener('keyup', ()=>{
        document.getElementById('authFunciona').classList.add('hidden')
        document.getElementById('authError').classList.add('hidden')
        document.getElementById('registerFormRepeatPsw').classList.add('hidden')
    });
    SignupDiv.querySelector('#registerFormRepeatPasswordInput').addEventListener('keyup', ()=>{
        document.getElementById('authFunciona').classList.add('hidden')
        document.getElementById('authError').classList.add('hidden')
        document.getElementById('registerFormRepeatPsw').classList.add('hidden')
    });
    SignupDiv.querySelector('#registerFormPetEmailInput').addEventListener('keyup', ()=>{
        document.getElementById('authError').classList.add('hidden')
    });
    SignupDiv.querySelector('#emailConfirmationDoneBtn').addEventListener('click', () => onNavigate('/feed'))
    return SignupDiv;
}