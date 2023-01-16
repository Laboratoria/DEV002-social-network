import {  signInWithPopup, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

//const auth = getAuth();
const provider = new GoogleAuthProvider();

export function signInWithGoogle (){
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const email = result.user.email;
        console.log("signed in")
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      
    }
    

// export const google = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log(result.user, 'user en Google function');
//       const userPhotoGoogle = result.user.photoURL;
//       return result.user;
//     } catch (error) {
//       console.log('Falló conexión de Google');
//     }
//   }; 



// // Iniciar sesión con Google
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // Obtener el correo electrónico del usuario
//     const email = result.user.email;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });


