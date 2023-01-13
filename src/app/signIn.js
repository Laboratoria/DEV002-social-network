import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { firebaseAuth } from './firebase.js';

export const signInAccount = () => {
    e.preventDefault();
  
  const email = document.getElementById('EmailLoginFormInput').value
  const password = document.getElementById('passwordEmailLoginInput').value

  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(`user${user}`);

  })
    .catch((error) => {
      const errorCode = error.code;
      console.log({errorCode})
      const errorMessage = error.message;
      console.log({errorMessage})
  });

}