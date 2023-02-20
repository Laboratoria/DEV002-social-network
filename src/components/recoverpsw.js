import { onNavigate } from '../main.js';
import { pswReset } from '../app/PswReset.js';

export const RecoverPsw = () => {
    const RecoverPswDiv = document.createElement('div');
    const template = `
        <section class="main-logo" id="mainLogo">
            <div class="main-logo-div">
            <img src="./Assets/logo.png"  alt="logo" class="main-logo-img" id="mainLogoImg" >
            </div>
        </section>
        <section class="recover-psw" id="RecoverPsw">
            <form class="recover-psw-form" id="RecoverPswForm">
                <div class="recover-psw-form-background">
                    <input type="recover-psw" class="recover-psw-form-input" id="RecoverPswFormInput" placeholder="hola@petblr.com" required />
                    <button class="reset-recover-psw-div-btn" id="resetRecoverPswDivBtn">RESTABLECER</button>
                    <button class="cancel-recover-psw-div-btn" id="cancelRecoverPswDivBtn">CANCELAR</button>                  
                </div>
            </form>
        </section>
        <section class="auth-funciona hidden" id="authFunciona">
            <div class="auth-error-div">
                <h1 class="auth-funciona-text">Correo de confirmación enviado</h1>
                <button class="email-confirmation-done-btn" id="emailConfirmationDoneBtn">ACEPTAR</button>
            </div>
        </section>
    `
    RecoverPswDiv.innerHTML = template
    
    RecoverPswDiv.querySelector('#resetRecoverPswDivBtn').addEventListener('click', async (e)=>{
        e.preventDefault();
        const RecoverPswForm = document.getElementById('RecoverPswForm')
        try {
            await pswReset(RecoverPswForm)  
            //aquí va el mensaje de correo de verificación enviado
            document.getElementById('authFunciona').classList.remove('hidden')  

        } catch (error) {
            console.log({error})            
        }    
    })
    RecoverPswDiv.querySelector('#cancelRecoverPswDivBtn').addEventListener('click', () => onNavigate('/emaillogin'))
    RecoverPswDiv.querySelector('#emailConfirmationDoneBtn').addEventListener('click', () => onNavigate('/emaillogin'))
    return RecoverPswDiv;
}