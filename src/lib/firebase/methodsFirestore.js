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


import { getFirestore, collection, getDocs, addDoc , query ,orderBy, onSnapshot, deleteDoc ,doc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// import { async } from "regenerator-runtime";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// Obtener la data desde el firestore
export const postsRef = async (id) => await getDocs(collection(db, 'posts', id)) 

//console.log('postsRef',postsRef()); 


//---------------Generando nuevos post de forma dinámica----------------

//utilizando método addDoc de firestore con onSnapshot(actualización en tiempo real)

export const savePosts = async (descripcion) => await addDoc(collection(db, 'posts'),{descripcion}) 
  

 export const getPost = (callback) => { 
  const qs = query(collection(db, 'posts'), orderBy( 'descripcion', 'asc'));
  onSnapshot (qs,(callback))
}

 // mostrar tiempo  del post 
// const date = new Date().toLocaleDateString('es-es', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})

//-----------------------------Eliminando post---------------------------
 export const deletePost = async (id) => await deleteDoc(doc (db , 'post', id))



//------------------------------Editando post-----------------------------
// export const udpDatePost = async (id) => await updateDoc(doc(db, 'post', id))


//------------------Agregando interacciones, me gusta <3 --------------------
// La idea es generar un array con los UserID para que sólo pueda haber uno por usuario 
// (click en boton <3 sea un push con if(UserID no se encuentre en el array) else(si UserID está presente) se borre del array)






