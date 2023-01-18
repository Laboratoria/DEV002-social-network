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
const saveDisplayName = (usernameIngresado) => {
  updateProfile(firebaseAuth.currentUser,
    {displayName: usernameIngresado})
};

// Get the currently signed-in user
// The recommended way to get the current user is by setting an observer on the Auth object:
const currentUser = {};

const getCurrentUser = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            currentUser.email = user.email;
            currentUser.uid = user.uid;
            currentUser.displayName = user.displayName;
            currentUser.petName = user.petName;
            currentUser.username = user.username;
        }
    });
};

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

  storage, storageRef, collectionUserName, collectionUserNamesSpanish,
  collectionPost, getPostData, getPostData2,
  saveDisplayName, currentUser, getCurrentUser
};