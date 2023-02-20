import { AuthAccountFacebook } from '../app/facebookrg.js';
import { onNavigate } from '../main.js';

export const Login = () => {
    const LoginDiv = document.createElement('div');
    const template = `
        <section class="main-logo" id="mainLogo">
            <div class="main-logo-div">
            <img src="./Assets/logo.png"  alt="logo" class="main-logo-img" id="mainLogoImg" >
            </div>
        </section>
        <section class="email-facebook-page" id="emailFacebookPage">
            <div class="email-facebook-div" id="emailFacebookDiv">
                <button class="email-btn" id="emailBtn">CORREO</button>
                <button class="facebook-btn" id="facebookBtn">FACEBOOK</button>
            </div>
            <p class="email-facebook-page-account" id="emailFacebookPageAccount">¿No tienes una cuenta?
                <a class="email-facebook-page-account-a">
                    <span class="email-facebook-page-account-btn" id="emailFacebookPageAccountBtn"> Click aquí </span>
                </a>                                
            </p>
        </section>
    `
    LoginDiv.innerHTML = template 
    LoginDiv.querySelector('#emailBtn').addEventListener('click', () => onNavigate('/emaillogin'))
    LoginDiv.querySelector('#facebookBtn').addEventListener('click', AuthAccountFacebook)
    LoginDiv.querySelector('#emailFacebookPageAccountBtn').addEventListener('click', () => onNavigate('/signup'))
    return LoginDiv;
}