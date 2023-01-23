// import { init } from "./config.js";
import { 
    getFirestore,
    collection, 
    getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

    // const app = init();
    const db = getFirestore();
    const userRef = collection(db, "users");
    
    export const postsRef = (db) => {
    getDocs(userRef).then((snap) => {
          snap.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
          });
    });
};




// const db = getFirestore(app);

// export const postsRef = (db) => {
//  getDocs(collection(db, 'posts'))};
