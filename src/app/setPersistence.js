import { firebaseAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from './firebase.js';
//Este será el archivo para el comportamiento de persistencia. lo que hace es que nos permite
//“saber que pasa cierra sesión o qué pasa sí sólo cierra la pestaña”
export const setPersistenceFun = async (e)=>{
    e.preventDefault();
    try {
      await setPersistence(firebaseAuth, inMemoryPersistence)
      const provider = new GoogleAuthProvider();
      const signInWithRedirectFun = await signInWithRedirect(firebaseAuth, provider);
      return signInWithRedirectFun
    } catch (error) {
      return Promise.reject(error)
    }
  }