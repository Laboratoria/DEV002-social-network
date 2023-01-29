import { onNavigate } from '../main.js';

export const login = () => {
    const homeDiv = document.createElement('div');
    const sectionDiv = document.createElement('section');
    const nombreApp= document.createElement('h3');
    const imageLogo = document.createElement('img');
    const registrateH4= document.createElement('h3');
    const formSU = document.createElement('form');
    const divUser = document.createElement('div');
    const inputUser = document.createElement('input');
    const inputPassword = document.createElement('input');
    const button = document.createElement('button');
    const hrefHome = document.createElement('href');

    sectionDiv.className= 'sectionDiv';
    nombreApp.className='nombreAplicacion';
    imageLogo.className = 'imageLogo';
    registrateH4.className= 'login';
    formSU.className = 'form';
    divUser.className = 'contenedorForm';
    inputUser.className = 'username';
    inputPassword.className = 'userpassword';
    button.className = 'button';
    hrefHome.className = 'hrefHome';

    formSU.id = 'formulario';
    inputUser.id = 'idUsername';
    inputPassword.id = 'idPassword';
    button.id = 'button';
    hrefHome.id = 'hrefHome';

    imageLogo.src = "images/logo-quecomemoshoy.png";

    nombreApp.textContent ="ENCUENTRA INSPIRACIÓN PARA TUS COMIDAS DIARIAS";
    registrateH4.textContent = 'Login';
    button.textContent = 'ENTRAR';
    hrefHome.textContent =  'Regresar al home';
    
    inputUser.placeholder = 'USUARIO';
    inputPassword.placeholder = 'PASSWORD';

    inputUser.type ='user';
    inputPassword.type ='password';
    button.type = 'submit';
    
    hrefHome.addEventListener('click',() => onNavigate('/'));
    button.addEventListener('click',async () => {
        onNavigate('/vistaGeneral')
    });

    homeDiv.appendChild(sectionDiv);
    sectionDiv.appendChild(nombreApp);
    sectionDiv.appendChild(imageLogo);
    homeDiv.appendChild(registrateH4);
    homeDiv.appendChild(divUser);
    divUser.appendChild(formSU);
    formSU.appendChild(inputUser);
    formSU.appendChild(inputPassword);
    formSU.appendChild(button);
    homeDiv.appendChild(hrefHome);

    return homeDiv;
};
