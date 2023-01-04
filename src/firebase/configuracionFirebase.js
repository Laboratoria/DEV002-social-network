// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// eslint-disable-next-line import/no-unresolved
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
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
export const coleccionUsuarios = collection(database, 'users');
export const coleccionNombresUsuario = collection(database, 'usernames');

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

getDocs(coleccionNombresUsuario)
    .then((snapshot) => {
        const lista = [];
        snapshot.docs.forEach((doc) => {
            lista.push({ ...doc.data() });
        });
        // console.log(lista[0].username);
    });
