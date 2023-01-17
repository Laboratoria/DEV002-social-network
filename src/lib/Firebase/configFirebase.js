// Import the functions you need from the SDKs you need (cdn)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

import { firebaseConfig } from "./firebaseData.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional (hacer git ignore para que no se suban esos datos de proyecto en git hub)


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);