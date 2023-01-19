//import { } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import firebaseConfig from "./configFirebase.js";

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const popupRegister = () =>{
signInWithPopup(auth, provider)
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    //return token, user
}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    //return errorCode, errorMessage, email, credential
})
}
