// Importa la biblioteca de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

// const auth = getAuth();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAHfvbH9LChUrOwAbR4cydwCsmHa7Q330',
  authDomain: 'usuarias-journey-mates.firebaseapp.com',
  projectId: 'usuarias-journey-mates',
  storageBucket: 'usuarias-journey-mates.appspot.com',
  messagingSenderId: '15257223280',
  appId: '1:15257223280:web:eecc0cb646124a2f42b4b5',
  measurementId: 'G-4W8ETMYH7S',
};
// Inicializa la aplicación de Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);


// Crea una función para registrar usuarios
export function registerUser(email, password, callback) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // El usuario ha sido registrado correctamente
      console.log('Usuario registrado correctamente');
      const user = userCredential.user;
      const userId = user.uid
      console.log(user, userId)
      callback(true)
    })
    .catch((error) => {
      console.error(error.code);
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está registrado')
      } else if (error.code === 'auth/weak-password') {
        alert('Tu contraseña no es segura')
      } else if (error.code === 'auth/invalid-email') {
        alert('Este correo no existe o es inválido')
      } else if (error.code === 'auth/internal-error') {
        alert("completa todos los campos")
      }
      callback(false)
    });
}

export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider);
    console.log(userResult);
    console.log("probando")
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const correo = error.customData.email;
    console.log(error);
  }
};





















// export const authGoogle = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });


