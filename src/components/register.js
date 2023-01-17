import { toNavigate } from "../main.js";
import { registerFirebase } from "../Firebase/registerFirebase.js";

export const register = () => {
    //Creamos elementos de Register
    const registerForm = document.createElement("form");
    const inputUserName = document.createElement("input");
    const inputUserCity = document.createElement("input");
    const inputUserCountry = document.createElement("input");
    const inputUserMail = document.createElement("input");
    const inputUserPass = document.createElement("input");
    const inputUserCheckPass = document.createElement("input");
    const selectIsVegan = document.createElement("select");
    const buttonRegister = document.createElement("button");
    const buttonPrueba = document.createElement("button");

    buttonPrueba.textContent = "probando"

    buttonRegister.textContent = "REGISTRARSE"

    buttonRegister.addEventListener("click", () => toNavigate("/registerOk"));

   /*  registerForm.appendChild(inputUserName);
    registerForm.appendChild(inputUserCity);
    registerForm.appendChild(inputUserCountry); */
    registerForm.appendChild(inputUserMail);
    registerForm.appendChild(inputUserPass);
    /* registerForm.appendChild(inputUserCheckPass);
    registerForm.appendChild(selectIsVegan);
    registerForm.appendChild(buttonRegister); */
    registerForm.appendChild(buttonPrueba);

    buttonPrueba.addEventListener("click", () => {
        registerFirebase(inputUserMail.value, inputUserPass.value)
        return console.log(inputUserMail.value)
   })
    

    
    return registerForm
}