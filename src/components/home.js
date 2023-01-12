export const home = () => {
    //Creamos elementos del Home
    const homeDiv = document.createElement("div");
    const inputMail = document.createElement("input");
    const inputPassword = document.createElement("input");
    const buttonLogin = document.createElement("button");
    const hrefRegister = document.createElement("a");
    const buttonGoogle = document.createElement("button");

    buttonLogin.textContent = "INICIAR SESIÓN";
    hrefRegister.textContent = "Crea una cuenta";
    buttonGoogle.textContent = "Continuar con Google";

    //falta crear evento que llama la función onNavigate()

    homeDiv.appendChild(inputMail);
    homeDiv.appendChild(inputPassword);
    homeDiv.appendChild(buttonLogin);
    homeDiv.appendChild(hrefRegister);
    homeDiv.appendChild(buttonGoogle);
    
    return homeDiv
}

