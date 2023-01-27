import { onNavigate } from '../main.js';

export const login = () => {
    const homeDiv = document.createElement('div');
    const sectionDiv = document.createElement('section');
    sectionDiv.className= 'bienvenida';
    const nombreApp= document.createElement('h3');
    nombreApp.className='nombreAplicacion';
    nombreApp.textContent ="ENCUENTRA INSPIRACIÓN PARA TUS COMIDAS DIARIAS";
    sectionDiv.appendChild(nombreApp);
    homeDiv.appendChild(sectionDiv);

    const imageLogo = document.createElement('img');
    imageLogo.className = 'imageLogo';
    imageLogo.src = "images/logo-quecomemoshoy.png";
    homeDiv.appendChild(imageLogo);

    const registrateH1= document.createElement('h4');
    registrateH1.className= 'registrate';
    registrateH1.textContent= 'LOGIN';
    sectionDiv.appendChild(registrateH1);

    const formSU = document.createElement('form');
    formSU.className = 'form';
    formSU.id = 'formulario';

    const divUser = document.createElement('div');
    divUser.className = 'contenedorForm'
    homeDiv.appendChild(divUser);
    divUser.appendChild(formSU);

    const inputUser = document.createElement('input');
    inputUser.type ='user';
    inputUser.className = 'username';
    inputUser.id = 'idUsername';
    inputUser.placeholder = 'USUARIO';
    formSU.appendChild(inputUser);

    const inputPassword = document.createElement('input');
    inputPassword.type ='password';
    inputPassword.className = 'userpassword';
    inputPassword.id = 'idPassword';
    inputPassword.placeholder = 'PASSWORD';
    formSU.appendChild(inputPassword);

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'ENTRAR'
    button.className = 'button';
    button.id = 'button';
    formSU.appendChild(button);

    const hrefHome = document.createElement('href');
    hrefHome.textContent =  'Regresar al home';
    hrefHome.className = 'hrefHome';
    hrefHome.id = 'hrefHome';
    hrefHome.addEventListener('click',() => onNavigate('/'));

    button.addEventListener('click',async () => {
        onNavigate('/vistaGeneral')
    });

    homeDiv.appendChild(hrefHome);

    return homeDiv;
};
    

