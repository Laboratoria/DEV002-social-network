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

    buttonRegister.textContent = "REGISTRARSE"

    //Falta crear evento que llame función onNavigate()

    registerDiv.appendChild(inputUserName);
    registerDiv.appendChild(inputUserCity);
    registerDiv.appendChild(inputUserCountry);
    registerDiv.appendChild(inputUserMail);
    registerDiv.appendChild(inputUserPass);
    registerDiv.appendChild(inputUserCheckPass);
    registerDiv.appendChild(selectIsVegan);
    registerDiv.appendChild(buttonRegister);
    
    return registerDiv
}