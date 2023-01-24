/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
/* PAGINA PARA REGISTRARSE CON DATOS */
export const register = () => {
  const sectionRegister = document.createElement('section');
  const divRegisterText = document.createElement('div');
  const textSignIn = document.createElement('p');
  const divRegisterForm = document.createElement('div');
  const formRegister = document.createElement('form');
  const labelName = document.createElement('label');
  const name = document.createElement('input');
  const labelLastName = document.createElement('label');
  const lastName = document.createElement('input');
  const labelEmail = document.createElement('label');
  const email = document.createElement('input');
  const labelPassword = document.createElement('label');
  const password = document.createElement('input');
  const btnRegistrarme = document.createElement('input');
  const btnHome = document.createElement('button');

  /* appen */

  sectionRegister.appendChild(btnHome);
  sectionRegister.appendChild(divRegisterText);
  divRegisterText.appendChild(textSignIn);
  sectionRegister.appendChild(divRegisterForm);
  divRegisterForm.appendChild(formRegister);
  formRegister.appendChild(labelName);
  formRegister.appendChild(name);
  formRegister.appendChild(labelLastName);
  formRegister.appendChild(lastName);
  formRegister.appendChild(labelEmail);
  formRegister.appendChild(email);
  formRegister.appendChild(labelPassword);
  formRegister.appendChild(password);
  formRegister.appendChild(btnRegistrarme);

  /* atribute */
  sectionRegister.setAttribute('class', 'sectionRegister');
  divRegisterText.setAttribute('class', 'divRegisterText');
  textSignIn.textContent = 'Ingresa tus Datos';

  divRegisterForm.setAttribute('class', 'divRegisterForm');
  formRegister.setAttribute('class', 'formRegister');
  formRegister.setAttribute('id', 'formRegister');

  labelName.textContent = 'Nombre';
  labelLastName.textContent = 'Apellido';
  labelEmail.textContent = 'Email';
  labelPassword.textContent = 'Password';

  name.setAttribute('class', 'name');
  name.setAttribute('type', 'text');

  lastName.setAttribute('class', 'lastName');
  lastName.setAttribute('type', 'text');

  email.setAttribute('class', 'email');
  email.setAttribute('type', 'email');

  password.setAttribute('class', 'password');
  password.setAttribute('type', 'password');

  btnRegistrarme.setAttribute('class', 'btnRegistrarme');
  btnRegistrarme.setAttribute('type', 'submit');

  /* function */

  btnRegistrarme.addEventListener('click', () => navigateRoutes('/login'));

  btnHome.addEventListener('click', () => navigateRoutes('/')); /* pathname '/' */

  return sectionRegister;
};
