import { toNavigate } from "../main.js";
import { register } from "../components/register.js"
import { auth, logout } from "../Firebase/firebase.js";

export const feed = () => {
    //Creamos elementos del Feed
    const feedDiv = document.createElement("div");
    const buttonSignOut = document.createElement("button");

    buttonSignOut.textContent = "Cerrar Sesión";

    buttonSignOut.addEventListener("click", () => toNavigate("/"));
    buttonSignOut.addEventListener("click", async (e) => {
            e.preventDefault() //cancela comportamiento por defecto de refrescar la pagina
            try {
                await logout(auth)
            } catch (error) {
                console.log(error)
            }
            toNavigate("/");
        })
        feedDiv.appendChild(buttonSignOut);

        return feedDiv;
    }