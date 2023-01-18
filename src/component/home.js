import { surfing } from '../main.js';

export const Home = () => {
  const $sectionHome = document.createElement('section');
  const $divLogoContainer = document.createElement('div');
  const $figureLogo = document.createElement('figure');
  const $imgLogo = document.createElement('img');
  const $divWelcomeContainer = document.createElement('div');
  const $h1Slogan = document.createElement('h1');
  const $imgCat = document.createElement('img');
  const $divBtnClickHere = document.createElement('div');
  const $inputBtnClickHere = document.createElement('input');

  $sectionHome.classList.add('home');
  $divLogoContainer.classList.add('c_logo', 'logo_container');
  $figureLogo.classList.add('logo');
  $divWelcomeContainer.classList.add('welcome', 'logo_container');
  $inputBtnClickHere.classList.add('btn_click');

  $imgLogo.setAttribute('src', 'img/logoNewMe.png');
  $imgLogo.setAttribute('alt', 'logo de la aplicacion');
  $h1Slogan.textContent = 'I could you can!';
  $imgCat.setAttribute('src', 'img/gato.png');
  $imgCat.setAttribute('alt', 'gato negro decorativo');
  $inputBtnClickHere.setAttribute('type', 'button');
  $inputBtnClickHere.setAttribute('id', 'btn_click');
  $inputBtnClickHere.setAttribute('value', 'CLICK HERE');

  $sectionHome
    .appendChild($divLogoContainer)
    .appendChild($figureLogo)
    .appendChild($imgLogo);
  $sectionHome.appendChild($divWelcomeContainer).appendChild($h1Slogan);
  $sectionHome.appendChild($divWelcomeContainer).appendChild($imgCat);
  $sectionHome
    .appendChild($divWelcomeContainer)
    .appendChild($divBtnClickHere)
    .appendChild($inputBtnClickHere);

  $inputBtnClickHere.addEventListener('click', () => {
    surfing('/Login');
  });

  return $sectionHome;
};
