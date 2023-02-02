/* import { get , getPosts, onGetPosts, collection, addPost } from "../Firebase/firestore.js";
import { db } from "../Firebase/firebaseConfig.js";
import { auth, viewer } from "../Firebase/firebase.js"; 
import { feed } from "../components/feed.js"; */
 

 export const postPrint = (doc) => {
    let docs = doc.data()
    let postValue =  `
    <div class = "postContent">
    <div id = "userNamePost" class="userNamePost"> usuario ${docs.user} </div>
    <div id = "postContainer" class= "postContainer"> contenido del post ${docs.post} </div>
    </div>
    <div class = "buttonsPosts">
    <button class = "buttonDelete" data-id="${doc.id}">eliminar</button>
    <button class = "buttonEdit" data-id="${doc.id}">editar</button>
    </div>
    `
    //console.log(doc.id)
   return postValue
     
 }

 
