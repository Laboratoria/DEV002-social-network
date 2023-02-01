import { getDocContent, getPosts, onSnapshot, collection } from "../Firebase/firestore.js";
import { db } from "../Firebase/firebaseConfig.js";
import { auth, viewer } from "../Firebase/firebase.js";
import { feed } from "../components/feed.js";



const postList = document.querySelector("post-feed");

export const postPrint = (doc) => {
    const timelineContainer = document.createElement("div");
    timelineContainer.innerHTML = `
    <div class="headerPost"> 
    <p class="userNamePost">${doc.name}</p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </div> 

    <p class="postContent">${doc.post}</p>
    <button class="buttonPost">Publicar</button>
    `
    postList.appendChild(timelineContainer);
};


db.collection('documents').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        postPrint(doc);
    });
});