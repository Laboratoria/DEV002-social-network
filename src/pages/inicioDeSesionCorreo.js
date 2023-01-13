import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from "../firebase/configuracion.js"

//  const signin = document.getElementById('ingresar')
//   console.log('holitas')

//const auth = getAuth();
export function inicioDeSesionEmail (email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    console.log("signed in")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
};