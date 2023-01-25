import { toNavigate } from "../main.js";
import { app } from "../Firebase/firebaseConfig.js"
import { auth, signUpWithPass, viewer } from "../Firebase/firebase.js";

export const register = () => {
    //Creamos elementos de para el formulario de registro


    const registerDiv = document.createElement("div");
    const containerRegister = document.createElement("section")
    const containerRegisterForm = document.createElement("section")
    const registerForm = document.createElement("form"); //formulario

    //Nombre
    const labelUserName = document.createElement("label");
    const inputUserName = document.createElement("input");

    //Ciudad
    const labelUserCity = document.createElement("label");
    const inputUserCity = document.createElement("input");

    //País
    const labelUserCountry = document.createElement("label");
    const inputUserCountry = document.createElement("input");

    //Mail
    const labelUserMail = document.createElement("label");
    const inputUserMail = document.createElement("input");

    //Contraseña y Verificación Contraseña
    const labelUserPass = document.createElement("label");
    const inputUserPass = document.createElement("input");
    const labelUserCheckPass = document.createElement("label");
    const inputUserCheckPass = document.createElement("input");

    //Selector
    const selectIsVegan = document.createElement("select");
    selectIsVegan.id = "selectVegan";
    const selectOption = document.createElement("option");
    const optionOne = document.createElement("option");
    const optionTwo = document.createElement("option");
    const optionThree = document.createElement("option");
    const optionFour = document.createElement("option");
    const optionFive = document.createElement("option");

    selectOption.setAttribute("selected", "");
    selectOption.setAttribute("value", "0");
    optionOne.setAttribute("value", "1");
    optionTwo.setAttribute("value", "2");
    optionThree.setAttribute("value", "3");
    optionFour.setAttribute("value", "4");
    optionFive.setAttribute("value", "5");

    selectOption.innerHTML = "Seleccionar opción";
    optionOne.innerHTML = "Sí, soy vegano";
    optionTwo.innerHTML = "Soy vegetarian@";
    optionThree.innerHTML = "No, pero lo intento";
    optionFour.innerHTML = "No, pero alguien cercano sí";
    optionFive.innerHTML = "Me interesa saber más";
    
    /*selectOption.setAttribute("label", "Seleccionar opción");
    optionOne.setAttribute("label", "Sí, soy vegano");
    optionTwo.setAttribute("label", "Soy vegetarian@");
    optionThree.setAttribute("label", "No, pero lo intento");
    optionFour.setAttribute("label", "No, pero alguien cercano sí");
    optionFive.setAttribute("label", "Me interesa saber más");*/
    
    selectIsVegan.appendChild(selectOption);
    selectIsVegan.appendChild(optionOne);
    selectIsVegan.appendChild(optionTwo);
    selectIsVegan.appendChild(optionThree);
    selectIsVegan.appendChild(optionFour);
    selectIsVegan.appendChild(optionFive);

    const buttonRegister = document.createElement("button");
    

    //Clases y Placeholder
    registerDiv.className = "register-div";
    containerRegister.className = "container-register";
    containerRegisterForm.className = "container-register-form";
    registerForm.className = "register-form";

    labelUserName.className = "userName";
    inputUserName.className = "input-Name-User";
    inputUserName.placeholder = "Nombre";

    labelUserCity.className = "userCity";
    inputUserCity.className = "input-City-User"
    inputUserCity.placeholder = "Ciudad";

    labelUserCountry.className = "userCountry";
    inputUserCountry.className = "input-Country-User";
    inputUserCountry.placeholder = "País";

    labelUserMail.className = "userMail";
    inputUserMail.type = "email";
    inputUserMail.className = "input-Mail-User";
    inputUserMail.placeholder = "E-mail";

    labelUserPass.className = "userPassword"
    inputUserPass.type = "password";
    inputUserPass.className = "input-Pass-User"
    inputUserPass.placeholder = "Contraseña";

    labelUserCheckPass.className = "userCheckPass";
    inputUserCheckPass.type = "password";
    inputUserCheckPass.className = "input-Check-Pass"
    inputUserCheckPass.placeholder = "Repita contraseña";

    buttonRegister.className = "button-Register";
    buttonRegister.textContent = "REGISTRARSE";

    registerDiv.appendChild(registerForm);
    containerRegister.appendChild(containerRegisterForm);


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
                if (error.code === "auth/invalid-email") {
                    alert("email inválido");
                } else if (error.code === "auth/weak-password") {
                    alert("contraseña débil");
                } else if (error.code === "auth/email-already-in-use") {
                    alert("email en uso");
                } else if (error.code) {
                    alert("algo anda mal");
                }
            }

            toNavigate("/registerOk");
        })
    })
    return registerForm;
}