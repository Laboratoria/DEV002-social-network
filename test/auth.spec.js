// importamos la funcion que vamos a testear
import {
  getAuth, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut, 
  auth
} from "../src/lib/Index.js"; 

import {
  signInGoogle,
  logOut,
  currentUserInfo,
  signIn,
  createUser
} from "../src/lib/Index.js";

jest.mock('src/lib/index.js', () => {
  return {
    auth: jest.fn(() => ({auth:'test'})),
    createUserWithEmailAndPassword: jest.fn((auth, userMail, userPass) =>{
      if (!userMail || !userPass) {
        throw new console.error('Error');
      }
      Promise.resolve({
        email1: '',
      });
    }),
  }
});
