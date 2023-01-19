/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, signInWithPopup,
  setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider,
  signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getFirestore, collection, getDoc, getDocs, setDoc, doc,
  onSnapshot, query, where, deleteDoc, updateDoc, arrayRemove, arrayUnion
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
import { getStorage, ref } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js'

// configuración de la app de firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCVFwSqmwf3nPLqyBd-_SrnWdKfmv8kRVc',
  authDomain: 'petblr-74086.firebaseapp.com',
  projectId: 'petblr-74086',
  storageBucket: 'petblr-74086.appspot.com',
  messagingSenderId: '431725901053',
  appId: '1:431725901053:web:0804da9ec879761fd6ba94',
};

// inicialización de firebase
const firebaseApp = initializeApp(firebaseConfig);

// uso de firebase auth
const firebaseAuth = getAuth(firebaseApp);

const providerFacebookAuth = new FacebookAuthProvider();

// NUUUUUUUUUUUEEEEEEEEEEEEEEEVOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

const storage = getStorage(firebaseApp);
const database = getFirestore();
// (está en setPersistence) const provider = new GoogleAuthProvider(firebaseApp);
const storageRef = ref(storage);
const collectionUserName = collection(database, 'usernames');
const collectionUserNamesSpanish = collection(database, 'usuarios');
const collectionPost = collection(database, 'posts');

// Guardar username desde el registro de la mascota
const saveDisplayName = (usernameIngresado) => updateProfile(firebaseAuth.currentUser, {
    displayName: usernameIngresado,
});
// Borrar post
const deletePost = uid => deleteDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid, 'userPosts', uid));


// obtener datos
const getPostData = (uid) => {
  getDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid))
};
const getPostData2 = (uid) => {
  getDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid, 'userPosts', uid))
};
// https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document

export {
  firebaseApp, firebaseAuth, createUserWithEmailAndPassword,
  sendPasswordResetEmail, sendEmailVerification,
  providerFacebookAuth, signInWithPopup, getAuth, FacebookAuthProvider,
  setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider,
  signInWithEmailAndPassword, signOut, getFirestore, collection, getDoc,
  getDocs, setDoc, doc, onSnapshot, query, where, deleteDoc,
  updateDoc, arrayRemove, arrayUnion, getStorage, ref,
  database,

  storage, database, storageRef, collectionUserName, collectionUserNamesSpanish,
  collectionPost, deletePost, getPostData, getPostData2, likePost, dislikePost,
  saveDisplayName
};