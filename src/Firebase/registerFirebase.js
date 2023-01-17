import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);

const auth = getAuth();


export const registerFirebase = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  return console.log(user);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const onAuth = (auth, user) => onAuthStateChanged(auth, user);
export const signOutFirebase = (auth) => signOut(auth);

    /*.then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });*/
