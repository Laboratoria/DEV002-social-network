import { surfing } from '../main.js';

export const home = () => {
  const $sectionHome = document.createElement('section'),
    $divLogoContainer = document.createElement('div'),
    $figureLogo = document.createElement('figure'),
    $imgLogo = document.createElement('img'),
    $divWelcomeContainer = document.createElement('div'),
    $h1Slogan = document.createElement('h1'),
    $imgCat = document.createElement('img'),
    $divBtnClickHere = document.createElement('div'),
    $inputBtnClickHere = document.createElement('input');
  $sectionHome.classList.add('home'),
  $divLogoContainer.classList.add('c_logo', 'logo_container'),
  $figureLogo.classList.add('logo'),
  $divWelcomeContainer.classList.add('welcome', 'logo_container'),
  $inputBtnClickHere.classList.add('btn_click'),
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
    surfing('/login');
  });

  return $sectionHome;
};
