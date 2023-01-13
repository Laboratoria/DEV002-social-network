import { signOut } from "firebase/auth";
import { firebaseAuth } from './firebase.js';
// Este archivo sirve para cuando tengamos un botón de cerrar sesión 

signOut(firebaseAuth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});