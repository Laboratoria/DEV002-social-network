import { toNavigate } from "../main.js";

export const feed = () => {
    //Creamos elementos del Feed
    const feedDiv = document.createElement("div"); 
    const buttonSignOut = document.createElement("button");

    buttonSignOut.textContent = "Cerrar Sesión";

    buttonSignOut.addEventListener("click", () => toNavigate("/"));

    feedDiv.appendChild(buttonSignOut);

    return feedDiv;
}