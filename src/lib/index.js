import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// } from "firebase/firestore";

import { onNavigate } from "../main.js";
import { app } from './Firebase.js';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Inicia el autentificador con google
export const provider = new GoogleAuthProvider();

// Initialize Firebase Firestore and get a reference to the service
export const firestore = getFirestore();
export const postCollection = collection(firestore, "post");

// CREAR USUARIO CON EMAIL
export const createUser = (userMail, userPass, userName) => createUserWithEmailAndPassword(auth, userMail, userPass)
  .then(() => {
    updateProfile(getAuth().currentUser, {
      displayName: userName,
    });
  });

// INGRESAR CON USUARIO EXISTENTE
export const signIn = (email, password) =>  signInWithEmailAndPassword(auth, email, password);

// INGRESAR CON GOOGLE - check
export const signInGoogle = async (onNavigate) => {
  try {
    await signInWithPopup(auth, provider);
    onNavigate('/dashboard');
  } catch (error) {
  }
};

// FUNCIÓN DE SIGNOUT - check
export const logOut = async (onNavigate) => {
  try {
    await signOut(auth);  
    onNavigate('/');
  } catch (error) {
  }
};

// funcion currentuser
export const currentUserInfo = () => auth.currentUser;

//comienzo firestore YA ESTA ARRIBA como firestore en vez de db
// const db =getFirestore();

//función publicar
export const submitPost = (postTxt) => {
  const post = {
    postText: postTxt,
    user: getAuth().currentUser.displayName,
    createdDateTime: new Date(),
    likes: []
  }
  return addDoc(postCollection, post);
};

//función para consultar todos los posts dispobibles en firestore
export const getAllPosts = async () => {
  const querypost = query(postCollection, orderBy('createdDateTime', 'desc'));
  const querySnapshot = await getDocs(querypost);
  return querySnapshot;
};

export const onGetPost = (querySnapshot) => {
  const querypost = query(collection(db, 'post'));
  onSnapshot(querypost, querySnapshot);
}