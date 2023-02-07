/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
// Importa la biblioteca de Firebase
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  getAuth,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {
  getFirestore,
  arrayRemove,
  onSnapshot,
  arrayUnion,
  collection,
  deleteDoc,
  updateDoc,
  Timestamp,
  getDocs,
  orderBy,
  addDoc,
  getDoc,
  query,
  doc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

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
export const db = getFirestore(app);
export const user = () => auth.currentUser;

export const saveTask = (description) => addDoc(collection(db, 'tasks'), {
  description,
  name: auth.currentUser.displayName,
  uid: auth.currentUser.uid,
  likes: [],
  createdDateTime: Timestamp.fromDate(new Date()),
});

export const saveUser = (name, uid, email, pais) => addDoc(collection(db, 'users'), {
  name,
  uid,
  email,
  pais,
  createdDateTime: Timestamp.fromDate(new Date()),
});

export const getTasks = () => getDocs(collection(db, 'tasks'));
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));
export const getTask = (id) => getDoc(doc(db, 'tasks', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);
export const dateTask = (querySnapshot) => {
  const q = query(collection(db, 'tasks'), orderBy('createdDateTime', 'desc'));
  onSnapshot(q, querySnapshot);
};

// Create new users

export function registerUser(email, password, name, pais, callback) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name,

      });
      // El usuario ha sido registrado correctamente
      // eslint-disable-next-line no-console
      console.log('Usuario registrado correctamente');
      const user = userCredential.user;
      const userId = user.uid;
      user.displayName = name;
      // console.log(user, userId);
      saveUser(user.displayName, userId, email, pais);
      callback(true); // permite que la función Register User proporcione un resultado a través de una función que se pasa como argumento.
    })
    .catch((error) => {
      console.error(error.code);
      if (error.code === 'auth/email-already-in-use') {
        alert('Este correo ya está registrado');
      } else if (error.code === 'auth/weak-password') {
        alert('Tu contraseña debe contener al menos 6 caracteres');
      } else if (error.code === 'auth/invalid-email') {
        alert('Este correo no existe o es inválido');
      } else if (error.code === 'auth/internal-error') {
        alert('Completa todos los campos');
      }
      callback(false);
    })
    .then(() => {
      sendEmailVerification(auth.currentUser);
    });
}

// inicio de sesión con email
export async function inicioDeSesionEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('signed in');
    const user = userCredential.user;
    const userId = user.uid;
    console.log(user, userId);
    return true;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Este correo ya está registrado');
    } else if (error.code === 'auth/weak-password') {
      alert('Tu contraseña no es segura');
    } else if (error.code === 'auth/invalid-email') {
      alert('Este correo no existe o es inválido');
    } else if (error.code === 'auth/internal-error') {
      alert('Completa todos los campos');
    }
    return false;
  }
}

// Sign in with Google

export const authGoogle = async () => {
  try {
    const userResult = await signInWithPopup(auth, provider);
    console.log(userResult);
    console.log('probando');
    window.location.href = '/timeLine';
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const correo = error.customData.email;
    // console.log(error);
  }
};

// Cerrar sesión

export const signOutFirebase = (auth) => auth.signOut();

export const onAuth = (auth) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user is signed in');
      // const uid = user.uid;
    } else {
      console.log('user is signed out');
    }
  });
};

// Like function

export const tapLike = (id, newLike) => {
  updateDoc(doc(db, 'tasks', id), {
    likes:
      arrayUnion(
        newLike,
      ),
  });
};

export const dislike = (id, oldLike) => {
  updateDoc(doc(db, 'tasks', id), {
    likes:
      arrayRemove(
        oldLike,
      ),
  });
};

export {
  createUserWithEmailAndPassword,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  Timestamp,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getFirestore,

};
