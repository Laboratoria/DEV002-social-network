// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Consultas firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import firebaseConfig from './firebaseconfig.js';

// Servivcios Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const exitConsult = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => error);
};

export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider);
    return userResult;
  } catch (error) {
    return error;
  }
};

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => error);
};
