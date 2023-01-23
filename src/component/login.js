// eslint-disable-next-line import/no-cycle
import { exitConsult, authGoogle } from '../lib/firebase.js';
// eslint-disable-next-line import/no-cycle
import { surfing } from '../main.js';

export const Login = () => {
  const $section = document.createElement('section');
  const $divLogo = document.createElement('div');
  const $figureLogin = document.createElement('figure');
  const $imgLogo = document.createElement('img');
  const $containerICoulLogin = document.createElement('div');
  const $iCouldLogin = document.createElement('h2');
  const $divContainerF = document.createElement('div');
  const $divContainerForm = document.createElement('div');
  const $divForm = document.createElement('form');
  const $divInput = document.createElement('div');
  const $inputEmail = document.createElement('input');
  const $inputPassword = document.createElement('input');
  const $divContainerCat = document.createElement('div');
  const $imgCat = document.createElement('img');
  const $inputSignUpCat = document.createElement('input');
  const $inputForgotP = document.createElement('input');
  const $divContainerSpan = document.createElement('div');
  const $spanOption = document.createElement('span');
  const $divContainerRegister = document.createElement('div');
  const $inputBtnGoogle = document.createElement('input');
  const $figureGoogle = document.createElement('figure');
  const $imgGoogle = document.createElement('img');
  const $pSignUp = document.createElement('p');

  // agregamos HTML semantico------------------------------------

  $section
    .appendChild($divLogo)
    .appendChild($figureLogin)
    .appendChild($imgLogo);
  $divLogo.appendChild($containerICoulLogin).appendChild($iCouldLogin);

  $section.appendChild($divContainerF);
  $divContainerF.appendChild($divContainerForm);
  $divContainerForm.appendChild($divForm);
  $divForm.appendChild($divInput);
  $divInput.appendChild($inputEmail);
  $divInput.appendChild($inputPassword);
  $divForm.appendChild($divContainerCat).appendChild($imgCat);
  $divContainerCat.appendChild($inputSignUpCat);
  $divContainerCat.appendChild($inputForgotP);

  $divContainerF.appendChild($divContainerSpan).appendChild($spanOption);

  $divContainerF.appendChild($divContainerRegister);
  $divContainerRegister.appendChild($figureGoogle).appendChild($imgGoogle);
  $divContainerRegister.appendChild($inputBtnGoogle);
  $divContainerRegister.appendChild($pSignUp);

  // agregamos atributos----------------------------------------
  $section.setAttribute('class', 'sectionLogin');
  $divLogo.setAttribute('class', 'logoNewM');
  $figureLogin.setAttribute('class', 'figureLogin');
  $imgLogo.setAttribute('src', 'img/logoNewMe.png');
  $imgLogo.setAttribute('alt', 'Logo de la aplicacion Newme');
  $iCouldLogin.setAttribute('class', 'sloganLogin');
  $iCouldLogin.textContent = 'I could you can!';

  $divContainerF.setAttribute('class', 'containerF');
  $divContainerForm.setAttribute('class', 'containerFormLogin');
  $divForm.setAttribute('id', 'formLogin');
  $divForm.setAttribute('class', 'formLogin');

  $divInput.setAttribute('class', 'problemInput');

  $inputEmail.setAttribute('type', 'email');
  $inputEmail.setAttribute('class', 'emailUser');
  $inputEmail.setAttribute('id', 'emailUserId');
  $inputEmail.setAttribute('placeHolder', 'example@gmail.com');

  $inputPassword.setAttribute('type', 'password');
  $inputPassword.setAttribute('class', 'passwordUser');
  $inputPassword.setAttribute('id', 'passwordUserId');
  $inputPassword.setAttribute('placeHolder', 'Password');

  $divContainerCat.setAttribute('class', 'ContainerCat');

  $imgCat.setAttribute('src', 'img/gato.png');
  $imgCat.setAttribute('alt', 'gato negro decorativo');

  $inputSignUpCat.setAttribute('type', 'submit');
  $inputSignUpCat.setAttribute('name', 'btn_signUpCat');
  $inputSignUpCat.setAttribute('class', 'btn_signUpCat');
  $inputSignUpCat.setAttribute('id', 'btn_signUpIdCat');
  $inputSignUpCat.setAttribute('value', 'SIGN IN');

  $inputForgotP.setAttribute('type', 'submit');
  $inputForgotP.setAttribute('class', 'forgotP');
  $inputForgotP.setAttribute('id', 'forgotP');
  $inputForgotP.setAttribute('value', 'I forgot my password');

  $divContainerSpan.setAttribute('class', 'containerSpan');
  $spanOption.setAttribute('class', 'option');
  $spanOption.textContent = 'Or sign up With';

  $divContainerRegister.setAttribute('class', 'ContainerReg');

  $inputBtnGoogle.setAttribute('type', 'button');
  $inputBtnGoogle.setAttribute('class', 'btn_google');
  $figureGoogle.setAttribute('class', 'log_google');
  $imgGoogle.setAttribute('src', 'img/imgGoogle.png');
  $inputBtnGoogle.setAttribute('id', 'btn_googleId');
  $inputBtnGoogle.setAttribute('value', 'WITH GOOGLE');

  $pSignUp.setAttribute('class', 'register');
  $pSignUp.innerHTML = `
  You don't have an account?
  <input type='button' class='btn_signUp' id='btn_signUpId' value='SIGN UP'>
  `;

  $divForm.addEventListener('submit', (e) => {
    e.preventDefault();
    exitConsult($inputEmail.value, $inputPassword.value);
    surfing('/Wall');
  });

  $inputBtnGoogle.addEventListener('click', async () => {
    await authGoogle();
    surfing('/Wall');
  });

  $pSignUp.addEventListener('click', () => {
    surfing('/Register');
  });

  return $section;
};
