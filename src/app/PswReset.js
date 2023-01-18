import { firebaseAuth, sendPasswordResetEmail } from './firebase.js';


export const pswReset = async (documentt) =>{
//e.preventDefault()
const email = document.getElementById('RecoverPswFormInput').value

  try{
    await sendPasswordResetEmail(firebaseAuth,email)
    return Promise.resolve()
  }catch(error)  {
    console.log({error});
    return Promise.reject(error)
  };
}