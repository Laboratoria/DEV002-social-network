import { app } from '../Firebase/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged, updateProfile, signInWithPopup, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//Crear Usuario
export const signUpWithPass = (auth, email, password) => createUserWithEmailAndPassword(auth, email, password)
export const signInWithPass = (auth, email, password) => signInWithEmailAndPassword(auth, email, password)
export const profileName = (userName) => updateProfile(auth.currentUser, { displayName: userName, });
export const currentUser = {};
export const viewer = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser.email = user.email;
      currentUser.uid = user.uid;
      currentUser.displayName = user.displayName;
      currentUser.userName = user.userName;
      console.log("user logged in " + user.email)
    } else {
      console.log("user logged out ")
    }
  });
};
export const logout = (auth) => signOut(auth)
export const popUpGoogle = (auth, provider) => signInWithPopup(auth, provider)



