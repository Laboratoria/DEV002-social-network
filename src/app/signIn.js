import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { firebaseAuth } from './firebase.js';

export const signInAccount = async (EmailLoginForm) => {
  const email = EmailLoginForm.EmailLoginFormInput.value
  const password = EmailLoginForm.passwordEmailLoginInput.value

  try {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const user = userCredential.user;
    console.log({user})
    return Promise.resolve(userCredential)
  } catch (error) {
    return Promise.reject(error)
  }
}