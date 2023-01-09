import { onNavigate } from '../main.js';

export const EmailLogin = () => {
    const EmailLoginDiv = document.createElement('div');
    const template = `
        <section class="Email-login" id="EmailLogin">
            <form class="Email-login-form" id="EmailLoginForm">
            <div class="Email-login-form-background">
                <input type="email" class="Email-login-form-input" id="EmailLoginFormInput" placeholder="hola@petblr.com" required />
                <input type="password" class="password-email-login-form-input" id="passwordEmailLoginInput" placeholder="******" required />
                <label class="email-login-forget-psw" id="emailLoginForgetPsw">¿Olvidaste la contraseña?</label>
                <button class="email-login-click-div-btn" id="emailLoginClickDivBtn">Click aquí</button>
                <button class="email-login-div-btn" id="emailLoginDivBtn">INGRESAR</button>
                </div>
                </form>
        
    `
    EmailLoginDiv.innerHTML = template
    //EmailLoginDiv.querySelector('#emailLoginDivBtn').addEventListener('click', () => onNavigate('/feed'))
    EmailLoginDiv.querySelector('#emailLoginClickDivBtn').addEventListener('click', () => onNavigate('/recoverpsw'))
    
    return EmailLoginDiv;
}
