import {onNavigate} from '../main.js';

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

    const registrateH1= document.createElement('h3');
    registrateH1.className= 'registrate';
    registrateH1.textContent= 'Registrate';
    sectionDiv.appendChild(registrateH1);

    const buttonGoogle = document.createElement('button');
    const buttonFb = document.createElement('button');
    const buttonCorreo = document.createElement('button');
    buttonGoogle.textContent = 'REGISTRATE CON GOOGLE';
    buttonFb.textContent = 'REGISTRATE CON FACEBOOK';
    buttonCorreo.textContent = 'REGISTRATE CON EMAIL';
    buttonGoogle.id= 'google';
    buttonFb.id= 'facebook';
    buttonCorreo.id= 'correo';

    buttonGoogle.addEventListener('click',() => onNavigate('/'));
    buttonFb.addEventListener('click',() => onNavigate('/'));
    buttonCorreo.addEventListener('click',() => onNavigate('/'));
    

    const buttonHome = document.createElement ('button');
    buttonHome.textContent = 'regresar al home';
    buttonHome.id= 'home';
    buttonHome.addEventListener('click',() => onNavigate('/'));

    homeDiv.appendChild(buttonGoogle);
    homeDiv.appendChild(buttonFb);
    homeDiv.appendChild(buttonCorreo);
    homeDiv.appendChild(buttonHome); 

    return homeDiv;
};