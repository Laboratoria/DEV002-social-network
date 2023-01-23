//import { } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import firebaseConfig from "./configFirebase.js";

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const popupRegister = async () =>{
return await signInWithPopup(auth, provider)
/*.then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
})*/
}

export const verifiedEmail = () => {
createUserWithEmailAndPassword(auth, email, password)
    /*.then((userCredential) => {
const user = userCredential.user;
})
    .catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
})*/
}

