

export const form = () => {
    const $sectionF = document.createElement("section"),

    $btnBack = document.createElement("input"), //este boton queda afuera de todos los div

    $divWelcomeF = document.createElement("div"),  //mobile  Divprincipal#1
    $welcomeF = document.createElement("h2"),         //mobile

    $divLogoF = document.createElement("div"),      //desktop     DivPrincipal#1
    $figureFormularioF = document.createElement("figure"),      //desktop
    $imgLogoF = document.createElement("img"),                     //desktop 
    $containerICouldForm = document.createElement("div"),      //desktop
    $iCouldForm = document.createElement("h2"),                   //desktop

    $divContainerFormF = document.createElement("div"),  //divprincipal#2
    $divFormF = document.createElement("form"),          //hijo de DivContainerFormF
    $divInputsF = document.createElement("div"),
    $inputEmailF = document.createElement("input"),
    $inputUsernameF = document.createElement("input"),
    $inputPasswordF = document.createElement("input"),
    $inputPasswordDos = document.createElement("input"),

    $divContainerCat = document.createElement("div"),   //hijo de DivFormF
    $imgCat = document.createElement("img"),
    $inputSignUpCat = document.createElement("input"),

    $divContainerSpanF = document.createElement("div"), //hijo de divContainerFormF
    $spanOptionF = document.createElement("span"),

    $divContainerRegisterF = document.createElement("div"), //hijo divContainerFormF
    $inputBtnGoogleF = document.createElement("input"),
    $figureGoogleF = document.createElement("figure"),
    $imgGoogleF = document.createElement("img")

    //-----------------------agregamos HTML semantico------------------------------------

    $sectionF.appendChild($btnBack);

    $sectionF.appendChild($divWelcomeF);
    $divWelcomeF.appendChild($welcomeF);

    $sectionF.appendChild($divLogoF);
    $divLogoF.appendChild($figureFormularioF);
    $figureFormularioF.appendChild($imgLogoF);
    $divLogoF.appendChild($containerICouldForm);
    $containerICouldForm.appendChild($iCouldForm);

    $sectionF.appendChild($divContainerFormF);
    $divContainerFormF.appendChild($divFormF);
    $divFormF.appendChild($divInputsF);
    $divInputsF.appendChild($inputEmailF);
    $divInputsF.appendChild($inputUsernameF);
    $divInputsF.appendChild($inputPasswordF);
    $divInputsF.appendChild($inputPasswordDos);

    $divFormF.appendChild($divContainerCat);
    $divContainerCat.appendChild($imgCat);
    $divContainerCat.appendChild($inputSignUpCat);

    $divContainerFormF.appendChild($divContainerSpanF);
    $divContainerSpanF.appendChild($spanOptionF);

    $divContainerFormF.appendChild($divContainerRegisterF);
    $divContainerRegisterF.appendChild($figureGoogleF).appendChild($imgGoogleF);
    $divContainerRegisterF.appendChild($inputBtnGoogleF);

    //------------atribuutos HTML--------------

    $sectionF.setAttribute("class", "sectionLogin");

    $btnBack.setAttribute("type", "button");
    $btnBack.setAttribute("class", "btnBack");
    $btnBack.setAttribute("value", "BACK");

    $divWelcomeF.setAttribute("class", "welcomeContainer");//saludo Mobile
    $welcomeF.textContent = "WELCOME TO NEWME";

    $divLogoF.setAttribute("class", "logoNewF")//79-84 desktop, display none
    $figureFormularioF.setAttribute("class", "figureLogin");
    $imgLogoF.setAttribute("src", "img/logoNewMe.png");
    $imgLogoF.setAttribute("alt", "Logo de la aplicacion Newme");
    $iCouldForm.setAttribute("class", "sloganLogin");
    $iCouldForm.textContent = "I could you can!";

    $divContainerFormF.setAttribute("class", "containerF");//desktop
    $divFormF.setAttribute("class", "formRegister");
    $divInputsF.setAttribute("class", "containerInputsRegister");

    $inputEmailF.setAttribute("type", "email");
    $inputEmailF.setAttribute("placeholder", "example@gmail.com");

    $inputUsernameF.setAttribute("type", "text");
    $inputUsernameF.setAttribute("placeholder", "Username");

    $inputPasswordF.setAttribute("type", "password");
    $inputPasswordF.setAttribute("placeholder", "Password");

    $inputPasswordDos.setAttribute("type", "password");
    $inputPasswordDos.setAttribute("placeholder", "Confirm Password");

    $divContainerCat.setAttribute("class", "containerCatReg");

    $imgCat.setAttribute("src", "img/gato.png");
    $imgCat.setAttribute("alt", "gato negro decorativo");
  
    $inputSignUpCat.setAttribute("type", "submit");
    $inputSignUpCat.setAttribute("name", "btn_signUpCat");
    $inputSignUpCat.setAttribute("class", "btn_signUpCat");
    $inputSignUpCat.setAttribute("id", "btn_signUpIdCat");
    $inputSignUpCat.setAttribute("value", "SIGN UP");

    $divContainerSpanF.setAttribute("class", "containerSpan");
    $spanOptionF.setAttribute("class", "option");
    $spanOptionF.textContent = "Or sign up With";


    $divContainerRegisterF.setAttribute("class", "ContainerReg");

    $inputBtnGoogleF.setAttribute("type", "button");
    $inputBtnGoogleF.setAttribute("class", "btn_google");
    $figureGoogleF.setAttribute("class", "log_google")
    $imgGoogleF.setAttribute("src", "img/imgGoogle.png");
    $inputBtnGoogleF.setAttribute("id", "btn_googleId");
    $inputBtnGoogleF.setAttribute("value", "WITH GOOGLE");


    


    

    return $sectionF
}