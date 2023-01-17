import { firebaseAuth, signInWithEmailAndPassword } from './firebase.js';

export const signInAccount = async (email,password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const user = userCredential.user;
    console.log({user})
    return Promise.resolve(userCredential)
  } catch (error) {
    return Promise.reject(error)
  }
}
 export {signInWithEmailAndPassword,firebaseAuth}