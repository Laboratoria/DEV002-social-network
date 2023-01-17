import { signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { firebaseAuth } from './firebase.js';

export const signOutFun = async (firebaseAuth) => {
  try {
    await signOut(firebaseAuth)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}