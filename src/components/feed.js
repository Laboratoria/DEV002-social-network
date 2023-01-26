import { toNavigate } from "../main.js";
import { register } from "../components/register.js"
import { auth, logout } from "../Firebase/firebase.js";

export const feed = () => {
    //Creamos elementos del Feed
    const feedDiv = document.createElement("div");
    feedDiv.classList = "feedDiv"
    const header = document.createElement("div");
    
    const imgHeader = document.createElement("img");
    imgHeader.src = "../img/Logo VeganShip.png"
    
    const inputSearchHeader = document.createElement("input");
    inputSearchHeader.placeholder = "tu búsqueda"

    const buttonSignOut = document.createElement("button");

    const newPostContainer = document.createElement("section");
    const newPostLocation = document.createElement("input");
    newPostLocation.placeholder = "ubicación"

    const newPostTag = document.createElement("input");
    newPostTag.placeholder = "etiquetas"

    const newPostContent = document.createElement("textarea");
    const newPostButton = document.createElement("button");
    const postFeed = document.createElement("section");
    const post = document.createElement("article");
    const postHeader = document.createElement("div");
    const imgProfilePost = document.createElement("img");
    const postUserName = document.createElement("h2");
    const postLocation = document.createElement("h4");
    //botón para hacer drop down menu con a href
    const moreOptions = document.createElement("button");
    const postContentContainer = document.createElement("div");
    const postTag = document.createElement("a");
    const postContent = document.createElement("textarea")
    const likeButton = document.createElement("button")

    header.appendChild(imgHeader);
    header.appendChild(inputSearchHeader);
    header.appendChild(buttonSignOut);
    feedDiv.appendChild(newPostContainer);
    newPostContainer.appendChild(newPostLocation);
    newPostContainer.appendChild(newPostTag);
    newPostContainer.appendChild(newPostContent);
    newPostContainer.appendChild(newPostButton);
    feedDiv.appendChild(postFeed);
    postFeed.appendChild(post);
    post.appendChild(postHeader);
    postHeader.appendChild(imgProfilePost);
    postHeader.appendChild(postUserName);
    postHeader.appendChild(postLocation);
    postHeader.appendChild(moreOptions);
    postFeed.appendChild(postContentContainer);
    postContentContainer.appendChild(postTag);
    postContentContainer.appendChild(postContent);
    postContentContainer.appendChild(likeButton);
    

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