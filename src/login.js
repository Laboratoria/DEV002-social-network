import { exitConsult, authGoogle } from "./firebase.js";

export const login = () => {
  const $section = document.createElement("section"),
    $divLogo = document.createElement("div"),
    $figureLogin = document.createElement("figure"),
    $imgLogo = document.createElement("img"),
    $containerICoulLogin = document.createElement("div"),
    $iCouldLogin = document.createElement("h2"),
    $divContainerF = document.createElement("div"),
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
    $figureGoogle = document.createElement("figure"),
    $imgGoogle = document.createElement("img"),
    $pSignUp = document.createElement("p")

  //agregamos HTML semantico------------------------------------

  $section
    .appendChild($divLogo)
    .appendChild($figureLogin)
    .appendChild($imgLogo);
    $divLogo.appendChild($containerICoulLogin).appendChild($iCouldLogin)
  
  $section.appendChild($divContainerF);
  $divContainerF.appendChild($divContainerForm);
  $divContainerForm.appendChild($divForm);
  $divForm.appendChild($divInput);
  $divInput.appendChild($inputEmail);
  $divInput.appendChild($inputPassword);
  $divForm.appendChild($divContainerCat).appendChild($imgCat);
  $divContainerCat.appendChild($inputSignUpCat);

  $divContainerF.appendChild($divContainerSpan).appendChild($spanOption);

  $divContainerF.appendChild($divContainerRegister);
  $divContainerRegister.appendChild($figureGoogle).appendChild($imgGoogle);
  $divContainerRegister.appendChild($inputBtnGoogle);
  $divContainerRegister.appendChild($pSignUp);

  //agregamos atributos----------------------------------------
  $section.setAttribute("class", "sectionLogin");
  $divLogo.setAttribute("class", "logoNewM")
  $figureLogin.setAttribute("class", "figureLogin");
  $imgLogo.setAttribute("src", "img/logoNewMe.png");
  $imgLogo.setAttribute("alt", "Logo de la aplicacion Newme");
  $iCouldLogin.setAttribute("class", "sloganLogin");
  $iCouldLogin.textContent = "I could you can!";

  $divContainerF.setAttribute("class", "containerF")
  $divContainerForm.setAttribute("class", "containerFormLogin");
  $divForm.setAttribute("id", "formLogin");
  $divForm.setAttribute("class", "formLogin");

  $divInput.setAttribute("class", "problemInput");

  $inputEmail.setAttribute("type", "email");
  $inputEmail.setAttribute("class", "emailUser");
  $inputEmail.setAttribute("id", "emailUserId");
  $inputEmail.setAttribute("placeHolder", "example@gmail.com");

  $inputPassword.setAttribute("type", "password");
  $inputPassword.setAttribute("class", "passwordUser");
  $inputPassword.setAttribute("id", "passwordUserId");
  $inputPassword.setAttribute("placeHolder", "Password");

  $divContainerCat.setAttribute("class", "ContainerCat");

  $imgCat.setAttribute("src", "img/gato.png");
  $imgCat.setAttribute("alt", "gato negro decorativo");

  $inputSignUpCat.setAttribute("type", "submit");
  $inputSignUpCat.setAttribute("name", "btn_signUpCat");
  $inputSignUpCat.setAttribute("class", "btn_signUpCat");
  $inputSignUpCat.setAttribute("id", "btn_signUpIdCat");
  $inputSignUpCat.setAttribute("value", "SIGN UP");

  $divContainerSpan.setAttribute("class", "containerSpan");
  $spanOption.setAttribute("class", "option");
  $spanOption.textContent = "Or sign up With";

  $divContainerRegister.setAttribute("class", "ContainerReg");

  $inputBtnGoogle.setAttribute("type", "button");
  $inputBtnGoogle.setAttribute("class", "btn_google");
  $figureGoogle.setAttribute("class", "log_google")
  $imgGoogle.setAttribute("src", "img/imgGoogle.png");
  $inputBtnGoogle.setAttribute("id", "btn_googleId");
  $inputBtnGoogle.setAttribute("value", "WITH GOOGLE");

  $pSignUp.setAttribute("class", "register");
  $pSignUp.innerHTML = `
  You don't have an account?
  <input type="button" class="btn_signUp" id="btn_signUpId" value="SIGN UP">
  `

  $divForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $divForm["emailUserId"].value;
    const password = $divForm["passwordUserId"].value;

    exitConsult(email, password);
  });

  $inputBtnGoogle.addEventListener("click", async () => {
    await authGoogle();
  });
  return $section;
};
