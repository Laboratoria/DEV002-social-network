import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfi = {
	apiKey: "AIzaSyDPHtZUcsIC4Le451IhyZuwQmB8XHFma3Y",
	authDomain: "social-network-39dcf.firebaseapp.com",
	projectId: "social-network-39dcf",
	storageBucket: "social-network-39dcf.appspot.com",
	messagingSenderId: "1024927465075",
	appId: "1:1024927465075:web:6d61cb6a3d3f57ddc43406",
	measurementId: "G-MK58E6Q1EJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfi);

//Initialize Firestore
export const db = getFirestore();
//db.settings({ timestampsInSnapshots: true });
