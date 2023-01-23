import {onNavigate} from '../main.js';
import {popupRegister} from '../lib/firebase/registerFir.js';

export const register =() => {
    const homeDiv = document.createElement('div');
    const sectionDiv = document.createElement('section');
    sectionDiv.className= 'bienvenida';
    const nombreApp= document.createElement('h2');
    nombreApp.className='nombreAplicacion';
    nombreApp.textContent ="Encuentra tu inspiracion para tus comidas diarias";
    sectionDiv.appendChild(nombreApp);
    homeDiv.appendChild(sectionDiv);

    const imageLogo = document.createElement('img');
    imageLogo.className = 'imageLogo';
    imageLogo.src = "images/logo-quecomemoshoy.png";
    homeDiv.appendChild(imageLogo);

    const iconGoogle = document.createElement('img');
    iconGoogle.className = 'iconGoogle';
    iconGoogle.src = "images/google.png";

    const iconCorreo = document.createElement('img');
    iconCorreo.className = 'iconCorreo';
    iconCorreo.src = "images/gmail.png";


    const registrateH1= document.createElement('h3');
    registrateH1.className= 'registrate';
    registrateH1.textContent= 'Registrate';
    sectionDiv.appendChild(registrateH1);

    const buttonGoogle = document.createElement('button');
    const buttonCorreo = document.createElement('button');
    buttonGoogle.textContent = 'REGISTRATE CON GOOGLE';
    buttonCorreo.textContent = 'REGISTRATE CON EMAIL';
    buttonGoogle.id= 'google';
    buttonCorreo.id= 'correo';

    buttonGoogle.addEventListener('click',() => {
        popupRegister();
        onNavigate('/vistaGeneral')
    });
    buttonCorreo.addEventListener('click',() => onNavigate('/'));
    

    const hrefHome = document.createElement('href');
    hrefHome.textContent =  'Regresar al home';
    hrefHome.className = 'hrefHome';
    hrefHome.id = 'hrefHome';
    hrefHome.addEventListener('click',() => onNavigate('/'));

    homeDiv.appendChild(buttonGoogle).appendChild(iconGoogle);
    homeDiv.appendChild(buttonCorreo).appendChild(iconCorreo);
    homeDiv.appendChild(hrefHome); 

    return homeDiv;
};