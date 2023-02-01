import { getDocContent, getPosts, onSnapshot, collection, addPost } from "../Firebase/firestore.js";
import { db } from "../Firebase/firebaseConfig.js";
import { auth, viewer } from "../Firebase/firebase.js";
import { feed } from "../components/feed.js";



const postList = document.querySelector("post-feed");

export const postPrint = async (doc) => {

   const timelineContainer = document.createElement("div");
    timelineContainer.innerHTML = `
    <div class="headerPost"> 
    <p class="userNamePost">hola</p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div> 

    <p class="postContent">hola</p>
    <button class="buttonPost">Publicar</button>
    `
    postList.appendChild(timelineContainer);

    const posts = await getPosts(collection(db, "documents"));
    console.log(posts)
    posts.forEach((document) => {
        postPrint(document);
    });
};

 