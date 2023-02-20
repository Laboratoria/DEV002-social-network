import {
  signInWithPopup, createUserWithEmailAndPassword, auth, provider,
} from './metFirebase.js';

/* eslint no-return-await: "error" */
export const popupRegister = () => signInWithPopup(auth, provider);
export const verifiedEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
