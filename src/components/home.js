import {onNavigate} from '../main.js';

export const home = () => {
    const homeDiv = document.createElement('div');
    const sectionDiv = document.createElement('section');
    sectionDiv.className= 'bienvenida';
    const nombreApp= document.createElement('h2');
    nombreApp.className='nombreAplicacion';
    const bienvenidaH1= document.createElement('h3');
    bienvenidaH1.className= 'welcomeh1';

    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    nombreApp.textContent="ENCUENTRA INSPIRACIÓN PARA TUS COMIDAS DIARIAS";
    buttonRegister.textContent= 'Registrate';
    buttonLogin.textContent= 'Inicia sesion';
    buttonLogin.id= 'buttonLogin';
    buttonRegister.id= 'buttonRegister';
    bienvenidaH1.textContent='Bienvenido';

    
    sectionDiv.appendChild(nombreApp);
    homeDiv.appendChild(sectionDiv);

    const imageLogo = document.createElement('img');
    imageLogo.className = 'imageLogo';
    imageLogo.src = "images/logo-quecomemoshoy.png";
    homeDiv.appendChild(imageLogo);
    sectionDiv.appendChild(bienvenidaH1);

    buttonRegister.addEventListener('click',() => onNavigate('/register'));
    buttonLogin.addEventListener('click',() => onNavigate ('/login'));

    homeDiv.appendChild(buttonRegister);
    homeDiv.appendChild(buttonLogin);

    return homeDiv;
};
