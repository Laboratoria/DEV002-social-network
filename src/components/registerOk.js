import { toNavigate } from "../main.js";

export const registerOk = () => {

    const registerOkDiv = document.createElement("div"); 
    const buttonContinue = document.createElement("button");

    buttonContinue.textContent = "Continuar";

    buttonContinue.addEventListener("click", () => toNavigate("/feed"));

    registerOkDiv.appendChild(buttonContinue);

    return registerOkDiv;

};

