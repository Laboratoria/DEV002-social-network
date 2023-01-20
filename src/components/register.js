import { toNavigate } from "../main.js";
import { app } from "../Firebase/firebaseConfig.js"
import { auth, signUpWithPass } from "../Firebase/firebase.js";

export const register = () => {
    //Creamos elementos de para el formulario de registro
    const registerForm = document.createElement("form");
    const labelUserName = document.createElement("label");
    const inputUserName = document.createElement("input");
    const labelUserCity = document.createElement("label");
    const inputUserCity = document.createElement("input");
    const labelUserCountry = document.createElement("label");
    const inputUserCountry = document.createElement("input");
    const labelUserMail = document.createElement("label");
    const inputUserMail = document.createElement("input");
    inputUserMail.type = "email";
    inputUserMail.placeholder = "E-mail";
    const labelUserPass = document.createElement("label");
    const inputUserPass = document.createElement("input");
    inputUserPass.type = "password";
    inputUserPass.placeholder = "Password";
    const labelUserCheckPass = document.createElement("label");
    const inputUserCheckPass = document.createElement("input");
    const selectIsVegan = document.createElement("select");
    const buttonRegister = document.createElement("button");

    buttonRegister.textContent = "REGISTRARSE"

    registerForm.appendChild(inputUserName);
    registerForm.appendChild(inputUserCity);
    registerForm.appendChild(inputUserCountry);
    registerForm.appendChild(inputUserMail);
    registerForm.appendChild(inputUserPass);
    registerForm.appendChild(inputUserCheckPass);
    registerForm.appendChild(selectIsVegan);
    registerForm.appendChild(buttonRegister);

    buttonRegister.addEventListener("click", () => {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault() //cancela comportamiento por defecto de refrescar la pagina
            const emailForm = inputUserMail.value
            const passwordForm = inputUserPass.value
            console.log(emailForm, passwordForm)
            try {
                const userCredentials = await signUpWithPass(auth, emailForm, passwordForm)
                console.log(userCredentials)
            } catch (error) {
                console.log(error)
            }

            toNavigate("/registerOk");
        })
    })
    return registerForm
}