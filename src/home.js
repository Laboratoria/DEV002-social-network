export const home = () => {
//$divManchas = document.createElement('div'),
const $sectionHome = document.createElement('section'),
$divLogoContainer = document.createElement('div'),
$figureLogo = document.createElement('figure'),
$imgLogo = document.createElement('img'),
$divWelcomeContainer = document.createElement('div'),
$h1Slogan = document.createElement('h1'),
$imgCat = document.createElement('img'),
$divBtnClickHere = document.createElement('div'),
$inputBtnClickHere = document.createElement('input');

$sectionHome.appendChild($divLogoContainer).appendChild($figureLogo).appendChild($imgLogo)
$sectionHome.appendChild($divWelcomeContainer).appendChild($h1Slogan)
$sectionHome.appendChild($divWelcomeContainer).appendChild($imgCat)
$sectionHome.appendChild($divBtnClickHere).appendChild($inputBtnClickHere)

console.log($sectionHome);
};
