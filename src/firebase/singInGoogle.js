/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import { signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

// const auth = getAuth();
const provider = new GoogleAuthProvider();

export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider);
    console.log(userResult);
    console.log('probando');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const correo = error.customData.email;
    console.log(errorCode, errorMessage, correo, credential);
  }
};

export const signInWithGoogle = async (callback) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const email = result.user.email;
    console.log('signed in');
    callback(true);
  } catch (error) {
    const credential = GoogleAuthProvider.credentialFromError(error);
    callback(false);
  }
};

export {
  signInWithPopup,
  GoogleAuthProvider,
};
