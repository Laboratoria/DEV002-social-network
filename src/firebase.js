
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQKOcN9jLUCxn2zXz-mkJKV-BaeFjcKvo',
  authDomain: 'redsocialnvj-47db7.firebaseapp.com',
  projectId: 'redsocialnvj-47db7',
  storageBucket: 'redsocialnvj-47db7.appspot.com',
  messagingSenderId: '161909447570',
  appId: '1:161909447570:web:b126b68b577520ab947f4b',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
// const fs = getFirestore(app)

// construyendo un observador de Auth //
export const validarSendingMail = (auth) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {

      let email = user.email;
      const uid = user.uid;
      // El usuario se encuentra logueado //
      console.log('auth: sign in');

      let emailVerified = user.emailVerified;
      if (emailVerified === false) {
        alert('Email no verificado');
      } else {
        console.log('Email verificado');
      }
    } else {
      // El usuario no se encuentra logueado
      console.log('auth: logout');
    }
  });
}


export const verificarSendingMail = (auth)  => {
  sendEmailVerification(auth.currentUser)
    .then(() => {

    });
}

  // función de Firebase para registrar un usuario //
  export const register = (auth, signupEmail, signupPassword) =>{ 
  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)  
    .then((userCredential) => {
      const user = userCredential.user;
    
      // actualizar los datos
      // user.updateProfile({
      //   displayName: nombres
      // 
    });
      
  };

  export const login = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // acceder a la pág a solo los usuarios que hayan verificado  a través del cooreo enviado //
      if (user.emailVerified) {
        alert('por favor verifica su correo en su bandeja de entrada')
        // Materialize.toast(`Bienvenido ${user.displayName}`, 5000)
        console.log('Bienvenid@')
      } else {
        auth.signOut()
        //  Materialize.toast(`Por favor realiza la verificación de tu cuenta `, 5000)
        console.log('Por favor realiza la verificación de tu cuenta');
      }
  
  })
  closeModalSI();
};
// Google Login
export const  signwGoogle  = (auth,provider) => {
  signInWithPopup(auth, provider)
  .then(result => {
    const user = result.user;
    
  });
    closeModalSI();
    console.log('sign in Google')
}



  



