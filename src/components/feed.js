import { toNavigate } from "../main.js";
import { register } from "../components/register.js"
import { auth, logout } from "../Firebase/firebase.js";
import { addPost, postCollection, userCollection } from "../Firebase/firestore.js";

export const feed = () => {
    //Creamos elementos del Feed
    const feedDiv = document.createElement("div");
    feedDiv.classList = "feedDiv"
    const header = document.createElement("div");

    const imgHeader = document.createElement("img");
    imgHeader.src = "../img/Logo VeganShip.png"
    imgHeader.classList = "imgHeader"

    const inputSearchHeader = document.createElement("input");
    inputSearchHeader.placeholder = "tu búsqueda"

    const buttonSignOut = document.createElement("button");
    buttonSignOut.textContent = "Cerrar Sesión";

    const newPostContainer = document.createElement("form");
    newPostContainer.classList = "newPostContainer";
    const newPostLocation = document.createElement("input");
    newPostLocation.placeholder = "ubicación"

    const newPostTag = document.createElement("input");
    newPostTag.placeholder = "etiquetas"

    const newPostContent = document.createElement("textarea");
    newPostContent.classList = "newPostContent"
    const newPostButton = document.createElement("button");
    newPostButton.textContent = "publicar";
    const postFeed = document.createElement("section");
    const post = document.createElement("article");
    const postHeader = document.createElement("div");
    postHeader.classList = "postHeader"
    const imgProfilePost = document.createElement("img");
    imgProfilePost.src = "../img/sandia-logo.png";
    imgProfilePost.classList = "imgProfilePost";
    
    const postUserName = document.createElement("h3");
    postUserName.textContent = "Vaquita Vegana";
    const postLocation = document.createElement("h4");
    postLocation.textContent = "Villa Dulce"
    //botón para hacer drop down menu con a href
    const moreOptions = document.createElement("button");
    moreOptions.textContent = "más"
    const postContentContainer = document.createElement("div");
    postContentContainer.classList = "postContentContainer"
    const postTag = document.createElement("a");
    postTag.textContent = "#recetas";
    const postContent = document.createElement("p");
    postContent.textContent = "receta de dobladitas";
    const likeButton = document.createElement("button");
    likeButton.textContent = "like";


    feedDiv.appendChild(header);
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




    buttonSignOut.addEventListener("click", () => toNavigate("/"));
    buttonSignOut.addEventListener("click", async (e) => {
        e.preventDefault() //cancela comportamiento por defecto de refrescar la pagina
        try {
            await logout(auth)
            toNavigate("/");
        } catch (error) {
            console.log(error)
        }
        
    })

    newPostButton.addEventListener("click", async (e) => {
        e.preventDefault()
        try{
            const postdescription = newPostContent.value;
            await addPost(postdescription)
            console.log(postdescription);
            newPostContainer.reset();
        }catch (error) {
            console.log(error)
        }
    })
    

    return feedDiv;
}