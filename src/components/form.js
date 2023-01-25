import { verifiedEmail } from '../lib/firebase/registerFir.js';
import {onNavigate} from '../main.js';
    //formulario de registro
export const form = () =>{
    const formDiv = document.createElement('div');
    const sectionDiv = document.createElement('section');
    sectionDiv.className= 'bienvenidaForm';
    const nombreForm= document.createElement('h4');
    nombreForm.className='nombreForm';
    nombreForm.textContent ="Registra tus datos aquí";
    sectionDiv.appendChild(nombreForm);
    formDiv.appendChild(sectionDiv);

    const imageLogo = document.createElement('img');
    imageLogo.className = 'imageLogoForm';
    imageLogo.src = "images/prueba-form.gif";
    formDiv.appendChild(imageLogo);

    const formGeneral = document.createElement('form');
    formGeneral.className = 'form';
    formGeneral.id = 'form';

    const formUser = document.createElement('div');
    formUser.className = 'contenedorForm'
    formDiv.appendChild(formUser);
    formUser.appendChild(formGeneral);

    const inputFormUser = document.createElement('input');
    const labelForm = document.createElement('label');
    labelForm.textContent = 'Correo';
    labelForm.className= 'labelForm';
    formGeneral.appendChild(labelForm);
    inputFormUser.type ='email';
    inputFormUser.className = 'email';
    inputFormUser.id = 'email';
    inputFormUser.placeholder = 'example@gmail.com';
    formGeneral.appendChild(inputFormUser);

    const inputFormPassword = document.createElement('input');
    const label = document.createElement('label');
    label.textContent = 'Password';
    label.className= 'label';
    formGeneral.appendChild(label);
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
        const prueba = await verifiedEmail();
        console.log(prueba)
        onNavigate('/login')
    });
    
    return formDiv;
}
