import { signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { firebaseAuth } from './firebase.js';
// Este archivo sirve para cuando tengamos un botón de cerrar sesión 

signOut(firebaseAuth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});