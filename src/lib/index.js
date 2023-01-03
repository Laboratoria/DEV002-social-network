import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHfvbH9LChUrOwAbR4cydwCsmHa7Q330",
  authDomain: "usuarias-journey-mates.firebaseapp.com",
  projectId: "usuarias-journey-mates",
  storageBucket: "usuarias-journey-mates.appspot.com",
  messagingSenderId: "15257223280",
  appId: "1:15257223280:web:eecc0cb646124a2f42b4b5",
  measurementId: "G-4W8ETMYH7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

