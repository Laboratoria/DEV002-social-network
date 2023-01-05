// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// eslint-disable-next-line import/no-unresolved, object-curly-newline
import { getFirestore, collection, getDocs, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
// eslint-disable-next-line object-curly-newline
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from './secrets.js';

export const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();
// export const coleccionUsuarios = collection(database, 'users');
export const coleccionNombresUsuario = collection(database, 'usernames');
export const coleccionUsuarios2 = collection(database, 'usuarios');

// Get the currently signed-in user
// The recommended way to get the current user is by setting an observer on the Auth object:
export const currentUser = {};

export const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            currentUser.email = user.email;
            currentUser.uid = user.uid;
            // currentUser.iddoc = user.id;
        } else {
            // User is signed out
            // ...
        }
        console.log(currentUser);
    });
};

// Cierre de sesión
export const logOut = () => signOut(auth);

// eslint-disable-next-line max-len
// Notas Pris: las siguientes líneas de código solo son para nuestra referencia. Despues las podemos borrar

getDocs(coleccionUsuarios)
    .then((snapshot) => {
        const lista = [];
        snapshot.docs.forEach((doc) => {
            lista.push({ ...doc.data(), id: doc.id });
        });
        // console.log(lista);
    });

// eslint-disable-next-line import/no-mutable-exports
// export const number = [];

// getDocs(coleccionUsuarios2)
//     .then((snapshot) => {
//         const lista = [];
//         snapshot.docs.forEach((doc) => {
//             lista.push({ ...doc.data(), id: doc.id });
//         });
//         number.push(lista.length);
//         // console.log(lista[0].id);
//     });

// getDocs(coleccionNombresUsuario)
//     .then((snapshot) => {
//         const lista = [];
//         snapshot.docs.forEach((documento) => {
//             lista.push({ ...documento.data() });
//         });
//         // console.log(lista[0].username);
//     });
