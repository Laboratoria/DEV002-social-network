import { toNavigate } from "../main.js";
import { registerFirebase } from "../Firebase/firebase.js";

export const register = () => {
    //Creamos elementos de Register
    const registerDiv = document.createElement("div");
    const inputUserName = document.createElement("input");
    const inputUserCity = document.createElement("input");
    const inputUserCountry = document.createElement("input");
    const inputUserMail = document.createElement("input");
    const inputUserPass = document.createElement("input");
    const inputUserCheckPass = document.createElement("input");
    const selectIsVegan = document.createElement("select");
    const buttonRegister = document.createElement("button");
    const buttonPrueba = document.createElement("button");

    buttonRegister.textContent = "REGISTRARSE"

    buttonRegister.addEventListener("click", () => toNavigate("/registerOk"));

    registerDiv.appendChild(inputUserName);
    registerDiv.appendChild(inputUserCity);
    registerDiv.appendChild(inputUserCountry);
    registerDiv.appendChild(inputUserMail);
    registerDiv.appendChild(inputUserPass);
    registerDiv.appendChild(inputUserCheckPass);
    registerDiv.appendChild(selectIsVegan);
    registerDiv.appendChild(buttonRegister);

    buttonPrueba.addEventListener("click", () => {
        registerFirebase(inputUserMail.value, inputUserPass.value)

    })
    

    
    return registerDiv
}