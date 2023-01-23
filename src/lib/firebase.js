// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// Consultas firebase
// eslint-disable-next-line import/no-unresolved
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
}
// eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import firebaseConfig from './firebaseconfig.js';

// Servivcios Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
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
