import { toNavigate } from "../main.js";
import { auth, signInWithPass, viewer } from "../Firebase/firebase.js";

export const home = () => {
    //Creamos elementos del Formulario
    //const homeDiv = document.createElement("div");
    const homeForm = document.createElement("form");
    const inputMail = document.createElement("input");
    const inputPassword = document.createElement("input");
    const buttonLogin = document.createElement("button");

    const signInDiv = document.createElement("div");
    const hrefRegister = document.createElement("a");
    const buttonGoogle = document.createElement("button");

    buttonLogin.textContent = "INICIAR SESIÓN";
    hrefRegister.textContent = "Crea una cuenta";
    buttonGoogle.textContent = "Continuar con Google";

    //homeDiv.appendChild(homeForm);
    homeForm.appendChild(inputMail);
    homeForm.appendChild(inputPassword);
    homeForm.appendChild(buttonLogin);

    //homeForm.appendChild(homeForm);
    homeForm.appendChild(hrefRegister);
    homeForm.appendChild(buttonGoogle);

    viewer();
   
    buttonLogin.addEventListener("click", () => {
        homeForm.addEventListener("submit", async (e) => {
            e.preventDefault()
            const emailLogin = inputMail.value
            const passwordLogin = inputPassword.value
            console.log(emailLogin, passwordLogin)
            try {
                const userCredentials = await signInWithPass(auth, emailLogin, passwordLogin)
                console.log(userCredentials.user)
            } catch (error) {
                console.log(error)
            }
    
            toNavigate("/feed");
        })
    })

    hrefRegister.addEventListener("click", () => toNavigate("/register"));
    buttonGoogle.addEventListener("click", () => toNavigate("/feed"));

    
    return homeForm
}



