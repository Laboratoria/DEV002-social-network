import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


// construyendo un observador de Auth
export const verifiedWithEmail = (auth) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var email = user.email;
            const uid = user.uid; // código único del usuario asignado por Firebase

            // El usuario se encuentra logueado
            console.log('auth:sign in');

            var emailVerified = user.emailVerified;
            if (emailVerified === false) {
                console.log('Email no verificado');
            } else {
                console.log('Email verificado');
            }
            // ...
        } else {
            // el suusario no se encuentra logueado
            console.log('auth: log out')
        }
    });
}

export const verificarSendingMail = (auth) => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        });
}

export const register = (auth, signupEmail, signupPassword) => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => { /*está implícita una promesa*/ 
            const user = userCredential.user;

            console.log(user);
            verificarSendingMail(auth);
             alert('por favor verifica el buzón de tu correo para verificar tu cuenta');

            // closeModalSU();
            // signupForm.reset();
            // signupForm.querySelector('.message-error').innerHTML = '';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // personalizando los mensajes de los 2 errores mas comunes
            // if (errorCode === 'auth/email-already-in-use') {
            //     signupForm.querySelector('.message-error').innerHTML = 'El Email ya se encuentra registrado'
            // } else if (errorCode === 'auth/weak-password') {
            //     signupForm.querySelector('.message-error').innerHTML = 'La Contraseña debe tener al menos 6 carácteres'
            // } else {
            //     signupForm.querySelector('.message-error').innerHTML = errorMessage; // mensajes por defecto de los otros posibles errores
            // }
            console.log(errorMessage)
        });
}


export const login = (auth, email, password) => {
    return new Promise((resolve, reject) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => resolve(user))   /*desestructuración del objeto user*/ 
            .catch(error => reject(error))
    })
}








export const logOut = (auth) => {
    auth.signOut().then(() => {
        console.log('sign out');
    });
}


export const loginWithGoogle = (auth) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            //   closeModalSI();
            console.log('sign in Google');
            //   signinForm.querySelector('.message-error').innerHTML = '';
        })
        .catch((error) => {
            const errorMessage = error.message;

            // personalizando los mensajes de los 2 errores mas comunes
            //   if (errorCode === 'auth/user-not-found') {
            //     signinForm.querySelector('.message-error').innerHTML = 'El Usuario no se encuentra registrado';
            //   } else if (errorCode === 'auth/wrong-password') {
            //     signinForm.querySelector('.message-error').innerHTML = 'La Contraseña no corresponde al usuario';
            //   } else {
            //     signinForm.querySelector('.message-error').innerHTML = errorMessage; //mensajes por defecto de los otros posibles errores
            //   }
            console.log(errorMessage);
        });
}