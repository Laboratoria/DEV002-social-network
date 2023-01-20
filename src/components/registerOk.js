import { toNavigate } from "../main.js";
import { auth, viewer, signInWithPass} from "../Firebase/firebase.js"
import { register } from "../components/register.js"

export const registerOk = () => {

    const registerOkDiv = document.createElement("div"); 
    const buttonContinue = document.createElement("button");

    buttonContinue.textContent = "Continuar";

    buttonContinue.addEventListener("click", () => {
    viewer(auth, async (user) => {
        if(user) {
            register();
            const signInOk = await signInWithPass(auth, userCredentials.email, userCredentials.password)
            console.log(signInOk, "funciona");
            toNavigate("/home");
        }
    })  
    
    toNavigate("/feed");
});

    registerOkDiv.appendChild(buttonContinue);

    return registerOkDiv;

};

