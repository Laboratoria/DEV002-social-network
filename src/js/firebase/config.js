// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";


const firebaseConfig = {
    apiKey: 'AIzaSyAQKOcN9jLUCxn2zXz-mkJKV-BaeFjcKvo',
    authDomain: 'redsocialnvj-47db7.firebaseapp.com',
    projectId: 'redsocialnvj-47db7',
    storageBucket: 'redsocialnvj-47db7.appspot.com',
    messagingSenderId: '161909447570',
    appId: '1:161909447570:web:b126b68b577520ab947f4b',
  };

  // Initialize Firebase
// console.log('app', app)
export const init = () =>{
  const app = initializeApp(firebaseConfig);

}
