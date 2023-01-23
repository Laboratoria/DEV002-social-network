import { verifiedEmail } from '../lib/firebase/registerFir.js';
import {onNavigate} from '../main.js';
    //formulario de registro
export const form = () =>{
    const formDiv = document.createElement('div');
    const formGeneral = document.createElement('form');
    formGeneral.className = 'form';
    formGeneral.id = 'form';

    const formUser = document.createElement('div');
    formUser.className = 'contenedorForm'
    formDiv.appendChild(formUser);
    formUser.appendChild(formGeneral);

    const inputFormUser = document.createElement('input');
    inputFormUser.type ='email';
    inputFormUser.className = 'email';
    inputFormUser.id = 'email';
    inputFormUser.placeholder = 'example@gmail.com';
    formGeneral.appendChild(inputFormUser);

    const inputFormPassword = document.createElement('input');
    inputFormPassword.type ='password';
    inputFormPassword.className = 'password';
    inputFormPassword.id = 'Password';
    inputFormPassword.placeholder = '********';
    formGeneral.appendChild(inputFormPassword);

    const buttonForm = document.createElement('button');
    buttonForm.textContent = 'REGISTRAR'
    buttonForm.className = 'buttonForm';
    buttonForm.id = 'buttonForm';
    formGeneral.appendChild(buttonForm);

    buttonForm.addEventListener('click',async () => {
        await verifiedEmail();
        onNavigate('/login')
    });
    
    return formDiv;
}
