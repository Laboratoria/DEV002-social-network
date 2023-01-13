import { sendPasswordResetEmail } from  'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { firebaseAuth } from './firebase.js';


export const pswReset = (e) =>{
e.preventDefault()
const email = document.getElementById('RecoverPswFormInput').value


sendPasswordResetEmail(firebaseAuth, email)
  .then(() => {
    
  })
  .catch((error) => {
    console.log({error});
  });
}