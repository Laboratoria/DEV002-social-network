import { onNavigate } from '../main.js';
import { signInAccount } from '../app/signIn.js'

export const EmailLogin = (email, password) => {
    const EmailLoginDiv = document.createElement('div');
    const template = `
        <section class="main-logo" id="mainLogo">
            <div class="main-logo-div">
            <img src="./Assets/logo.png"  alt="logo" class="main-logo-img" id="mainLogoImg" >
            </div>
        </section>
        <section class="Email-login" id="EmailLogin">
            <form class="Email-login-form" id="EmailLoginForm">
                <div class="Email-login-form-background">
                    <input type="email" class="Email-login-form-input" id="EmailLoginFormInput" placeholder="hola@petblr.com" required />
                    <input type="password" class="password-email-login-form-input" id="passwordEmailLoginInput" placeholder="******" required />
                    <button class="email-login-div-btn" id="emailLoginDivBtn">INGRESAR</button>
                    <p class="email-login-forget-psw" id="emailLoginForgetPsw">¿Olvidaste la contraseña?
                        <a class="email-login-forget-psw-a">
                            <span class="email-login-click-div-btn" id="emailLoginClickDivBtn"> Click aquí </span>
                        </a>                                
                    </p>
                </div>
            </form>
        </section>                
    `
    EmailLoginDiv.innerHTML = template
    EmailLoginDiv.querySelector('#emailLoginDivBtn').addEventListener('click', async (e)=>{
        e.preventDefault();
        const email = document.getElementById('EmailLoginFormInput').value
        const password = document.getElementById('passwordEmailLoginInput').value
        try {
            await signInAccount(email,password)
            onNavigate('/feed')
        } catch (error) {
            console.log({error})
        }
    })
    EmailLoginDiv.querySelector('#emailLoginClickDivBtn').addEventListener('click', () => onNavigate('/recoverpsw'))
    
    return EmailLoginDiv;
}
