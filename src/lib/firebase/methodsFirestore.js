// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";


const firebaseConfig = {
    apiKey: 'AIzaSyAQKOcN9jLUCxn2zXz-mkJKV-BaeFjcKvo',
    authDomain: 'redsocialnvj-47db7.firebaseapp.com',
    projectId: 'redsocialnvj-47db7',
    storageBucket: 'redsocialnvj-47db7.appspot.com',
    messagingSenderId: '161909447570',
    appId: '1:161909447570:web:b126b68b577520ab947f4b',
  };

export const app = initializeApp(firebaseConfig);


import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//---------------Obteneniendo post desde firestore---------------
export const postsRef = async () => await getDocs(collection(db, 'posts'))

console.log('postsRef',postsRef()); 

//---------------Generando nuevos post de forma dinámica----------------


//------------------------------Editando post-----------------------------


//------------------Agregando interacciones, me gusta <3 --------------------
// La idea es generar un array con los UserID para que sólo pueda haber uno por usuario 
// (click en boton <3 sea un push con if(UserID no se encuentre en el array) else(si UserID está presente) se borre del array)




//Add a new document in collection "posts"
// export const crearPost = await setDoc(doc(db, "posts", "LA"), {
//   autor: "Jhoa",
//   descripcion: "Insertando 1º post",
//   fecha: "22/01/2023",
//   titulo: "3º post"
// });


// export const crearPost = (uid, titulo, descripcion) => {
//   return this.db.collection('posts').add({  // adición de un post. También podemos utilizar nuestro propio Id usando:    .doc("key").set({      
//     uid: uid,
//     autor: autor,
//     titulo: titulo,
//     descripcion: descripcion,
//     fecha: firebase.firestore.FieldValue.serverTimestamp()
//   })
//     .then(refDoc => { // si la inserción(creación del post) fue exitosa debería dar en la consola el id del post que debería venir del firestore
//       console.log(`Id del post =>${refDoc.id}`)
//     }).catch(error => {
//       console.log(`Error de creación del post =>${error}`);
//     })
// };
