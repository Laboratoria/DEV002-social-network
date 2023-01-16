import {onNavigate} from '../main.js';

export const home = () => {
    const homeDiv = document.createElement('div');
    /*homeDiv.textContent = 'Encuentra la inspiracion para tus comidas diarias';
    homeDiv.id='textoBienvenida';*/
    const sectionDiv = document.createElement('section');
    sectionDiv.className= 'bienvenida';
    const bienvenidaH1= document.createElement('h3');
    bienvenidaH1.className= 'welcomeh1';
    const nombreApp= document.createElement('h2');
    nombreApp.className='nombreAplicacion';

    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
   
    buttonRegister.textContent= 'Registrate';
    buttonLogin.textContent= 'Inicia sesion';
    buttonLogin.id= 'buttonLogin';
    buttonRegister.id= 'buttonRegister';
    nombreApp.textContent="ENCUENTRA INSPIRACIÓN PARA TUS COMIDAS DIARIAS";
    bienvenidaH1.textContent='Bienvenido';
    sectionDiv.appendChild(bienvenidaH1);
    sectionDiv.appendChild(nombreApp);

    homeDiv.appendChild(sectionDiv);


    buttonRegister.addEventListener('click',() => onNavigate('/register'));
    buttonLogin.addEventListener('click',() => onNavigate ('/login'));

    const imageLogo = document.createElement('img');
    imageLogo.className = 'imageLogo';
    imageLogo.src = "images/logo-red-social.jpg";
    homeDiv.appendChild(imageLogo);

    homeDiv.appendChild(buttonRegister);
    homeDiv.appendChild(buttonLogin);

    return homeDiv;
};
