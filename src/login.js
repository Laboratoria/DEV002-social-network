import { HelpFormatter } from "argparse";

  export const login = () => {
    const $section = document.createElement("section"),
  $divLogo = document.createElement("div"),
  $imgLogo = document.createElement("img"),
  $divContainerForm = document.createElement("div"),
  $divForm = document.createElement("form"),
  $divInput = document.createElement("div"),
  $inputEmail = document.createElement("input"),
  $inputPassword = document.createElement("input"),
  $divContainerCat = document.createElement("div"),
  $imgCat = document.createElement("img"),
  $inputSignUpCat = document.createElement("input"),
  $divContainerSpan = document.createElement("div"),
  $spanOption = document.createElement("span"),
  $divContainerRegister = document.createElement("div"),
  $inputBtnGoogle = document.createElement("input"),
  $pSignUp = document.createElement("p"),
  $inputSignUp = document.createElement("input");

  $section.appendChild($divLogo).appendChild($imgLogo)
  $section.appendChild($divContainerForm).appendChild($divForm)
  $divForm.appendChild($divInput).appendChild($inputEmail)
  $divForm.appendChild($divInput).appendChild($inputPassword)
  $divForm.appendChild($divContainerCat).appendChild($imgCat)
  $divForm.appendChild($divContainerCat).appendChild($inputSignUpCat)
  $divForm.appendChild($divContainerSpan).appendChild($spanOption)
  $divForm.appendChild($divContainerRegister).appendChild($inputBtnGoogle)
  $divForm.appendChild($divContainerRegister).appendChild($pSignUp).appendChild($inputSignUp)
//agregamo atributos
$divForm.setAttribute('id','formLogin')
$divForm.setAttribute('class','formLogin')

$inputEmail.setAttribute('type','email')
$inputEmail.setAttribute('class','emailUser')
$inputEmail.setAttribute('id','emailUserId')
$inputEmail.setAttribute('placeHolder','Username')

$inputPassword.setAttribute('type','password')
$inputPassword.setAttribute('class','passwordUser')
$inputPassword.setAttribute('id','passwordUserId')
$inputPassword.setAttribute('placeHolder','Password')

$imgCat.setAttribute('src','img/gato.png')
$imgCat.setAttribute('alt','gato negro decorativo')

$inputSignUpCat.setAttribute('type','submit')
$inputSignUpCat.setAttribute('name','btn_signUpCat')
$inputSignUpCat.setAttribute('class','btn_signUpCat')
$inputSignUpCat.setAttribute('id','btn_signUpIdCat')

$inputBtnGoogle.setAttribute('type','button')
$inputBtnGoogle.setAttribute('class','btn_google')
$inputBtnGoogle.setAttribute('id','btn_googleId')
$inputBtnGoogle.setAttribute('value','WITH GOOGLE')

$inputSignUp.setAttribute('type','button')
$inputSignUp.setAttribute('class','btn_signUp')
$inputSignUp.setAttribute('id','btn_signUpId')
$inputSignUp.setAttribute('value','SIGN UP')


  return $section;
  };

  



 
