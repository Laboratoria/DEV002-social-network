import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import firebaseConfig from "./configFirebase.js";

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const popupRegister = async () =>{
return await signInWithPopup(auth, provider)
}

export const verifiedEmail = (email , password) => {
return createUserWithEmailAndPassword(auth, email, password)
}