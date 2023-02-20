/* eslint-disable no-console */
import {
  providerFacebookAuth, signInWithPopup, getAuth, FacebookAuthProvider,
} from './firebase.js';

export function AuthAccountFacebook() {
  const auth = getAuth();
  signInWithPopup(auth, providerFacebookAuth)
    .then((result) => {
    // The signed-in user info.
      const user = result.user;
      console.log(`user${user}`);

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      console.log(`credential${credential}`);

      const accessToken = credential.accessToken;
      console.log(`accessToken${accessToken}`);

      
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      console.log(`errorCode${errorCode}`);

      const errorMessage = error.message;
      console.log(`errorMessage${errorMessage}`);

      // The email of the user's account used.
      const email = error.customData.email;
      console.log(`email${email}`);

      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(`credential${credential}`);
});
}
