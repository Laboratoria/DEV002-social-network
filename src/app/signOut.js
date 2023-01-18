import { firebaseAuth, signOut } from './firebase.js';

export const signOutFun = async (firebaseAuth) => {
  try {
    await signOut(firebaseAuth)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}