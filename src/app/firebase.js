/* eslint-disable import/no-unresolved */
// como utilizamos CDN, en lugar de utilizar "from "firebase/auth"" se utiliza el link
// https://firebase.google.com/docs/web/learn-more#available-libraries
// link que lleva al link anterior
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, FacebookAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

// configuración de la app de firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCVFwSqmwf3nPLqyBd-_SrnWdKfmv8kRVc',
  authDomain: 'petblr-74086.firebaseapp.com',
  projectId: 'petblr-74086',
  storageBucket: 'petblr-74086.appspot.com',
  messagingSenderId: '431725901053',
  appId: '1:431725901053:web:0804da9ec879761fd6ba94',
};

// inicialización de firebase
const firebaseApp = initializeApp(firebaseConfig);

// uso de firebase auth
const firebaseAuth = getAuth(firebaseApp);

const providerFacebookAuth = new FacebookAuthProvider();

export {
  firebaseApp, firebaseAuth, createUserWithEmailAndPassword,
  providerFacebookAuth, signInWithPopup, getAuth, FacebookAuthProvider,
};
