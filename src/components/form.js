import { verifiedEmail } from '../lib/firebase/registerFir.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// formulario de registro
export const form = () => {
  const formDiv = document.createElement('div');
  const sectionDiv = document.createElement('section');
  const nombreForm = document.createElement('h4');
  const imageLogo = document.createElement('img');
  const formGeneral = document.createElement('form');
  const formUser = document.createElement('div');
  const inputFormUser = document.createElement('input');
  const inputFormPassword = document.createElement('input');
  const buttonForm = document.createElement('button');

  sectionDiv.className = 'bienvenidaForm';
  nombreForm.className = 'nombreForm';
  imageLogo.className = 'imageLogoForm';
  formGeneral.className = 'formGeneral';
  formUser.className = 'contenedorForm';
  inputFormUser.className = 'email';
  inputFormPassword.className = 'password';
  buttonForm.className = 'buttonForm';

  formGeneral.id = 'form';
  buttonForm.id = 'buttonForm';

  imageLogo.src = 'images/gorritoterminado.png';

  nombreForm.textContent = 'REGISTRA TUS DATOS AQUÍ';
  buttonForm.textContent = 'REGISTRAR';

  inputFormUser.placeholder = 'ejemplo@gmail.com';
  inputFormPassword.placeholder = '********';

  inputFormUser.name = 'email';
  inputFormPassword.name = 'password';

  inputFormUser.type = 'email';
  inputFormPassword.type = 'password';

  formGeneral.addEventListener('submit', async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const email = event.target.email.value;
    const prueba = await verifiedEmail(email, password);
    console.log(prueba);
    onNavigate('/login');
  });

  formDiv.appendChild(sectionDiv);
  sectionDiv.appendChild(nombreForm);
  formGeneral.appendChild(imageLogo);
  formDiv.appendChild(formUser);
  formUser.appendChild(formGeneral);
  formGeneral.appendChild(inputFormUser);
  formGeneral.appendChild(inputFormPassword);
  formGeneral.appendChild(buttonForm);

  return formDiv;
};
