import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// } from "firebase/firestore";

import { onNavigate } from "../main.js";
import { app } from './Firebase.js';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const authLogin = () => {
  const userLogin = getAuth().onAuthStateChanged((user) => {
    if (user){
      onNavigate('/dashboard');
    }
  });
  return userLogin;
};

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

// Función checkout- check
export const logOut = async (onNavigate) => {
  try {
    await signOut(auth);  
    onNavigate('/');
  } catch (error) {
  }
};

// funcion currentuser
export const currentUserInfo = () => auth.currentUser;

//función publicar
export const submitPost = (postTxt) => {
  const post = {
    postText: postTxt,
    user: getAuth().currentUser.displayName,
    uid: getAuth().currentUser.uid,
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

//función para borrar post
export const deletePost = (id) => {
  return deleteDoc(doc(firestore,'post',id));
};

//funcion para traer un post para editar
export const getTask = (id) => getDoc(doc(firestore,'post', id));

//función updateTask

export const updateTask = (id, docData) => {
  console.log('document to update: ', id);
  return updateDoc(doc(firestore, 'post', id), {
    postText: docData.postText
  })
};

// funcion like
export const giveLike = (id) => {
  return updateDoc(doc(firestore, 'post', id), {
    likes: arrayUnion(getAuth().currentUser.uid)
  });
}
// export const giveLike = (id, likes, likesCounter) => {
//   return updateDoc(doc(firestore, 'post', id),
//   {likes: arrayUnion(likes),
//   });
// };

// export const dislike = (id, likes, likeData) => {
//   return updateDoc(doc(firestore, 'post', id),
//   {likes: arrayRemove(likes),
//   });
// };

// export const giveLike = (id, nuevoLike) => {
//   return updateDoc(doc(firestore, 'post', id),
//   {likes: arrayUnion(nuevoLike),
//   });
// };

// export const dislike = (id, viejoLike) => {
//   return updateDoc(doc(firestore, 'post', id),
//   {likes: arrayRemove(viejoLike)
//   });
// };
