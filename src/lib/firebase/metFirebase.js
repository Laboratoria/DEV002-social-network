// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import firebaseConfig from './configFirebase.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export {
  signInWithPopup, createUserWithEmailAndPassword, auth, provider, collection, addDoc, getDocs, db, deleteDoc, onSnapshot, doc, getDoc, updateDoc,
};
