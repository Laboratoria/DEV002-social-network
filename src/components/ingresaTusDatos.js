
export const ingresaTusDatos = () =>{
    const datosDiv = document.createElement("div");
    const buttonRegistro = document.createElement("button")
    const buttonLogin = document.createElement("button")

    buttonRegistro.textContent = "Registrate";
    buttonLogin.textContent = "Inicia Sesión";

    datosDiv.appendChild(buttonRegistro);
    datosDiv.appendChild(buttonLogin);

    return datosDiv;
};