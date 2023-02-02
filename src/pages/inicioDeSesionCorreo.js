import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracion.js';

// const auth = getAuth();
export function inicioDeSesionEmail(email, password, callback) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('signed in');
      const user = userCredential.user;
      const userId = user.uid;
      console.log(user, userId);
      callback(true);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está registrado');
      } else if (error.code === 'auth/weak-password') {
        alert('Tu contraseña no es segura');
      } else if (error.code === 'auth/invalid-email') {
        alert('Este correo no existe o es inválido');
      } else if (error.code === 'auth/internal-error') {
        alert('Completa todos los campos');
      }
      callback(false);
    });
}
