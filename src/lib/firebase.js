import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLeEKdWYHeyxAAPoZ3-tpRs85uDEc9iYg",
  authDomain: "reading-club-43baf.firebaseapp.com",
  projectId: "reading-club-43baf",
  storageBucket: "reading-club-43baf.appspot.com",
  messagingSenderId: "93329318817",
  appId: "1:93329318817:web:b0b22eb377191fa03be1e0",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 

signInWithRedirect(firebaseAuths, provider);

getRedirectResult(firebaseAuths)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });