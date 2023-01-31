// Importa la biblioteca de Firebase
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {
  getFirestore, collection, doc, addDoc, getDoc, getDocs, deleteDoc, updateDoc, Timestamp, query, orderBy, onSnapshot, arrayUnion,
  arrayRemove,
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

// export const saveTask = (description) =>
//     addDoc(collection(db, 'tasks'),{ description, likes:[], name:""});
// export const saveTask = (description) =>
// addDoc(collection(db, 'tasks'),{
//   description: description,
//   name:auth.currentUser.displayName,
//   uid:auth.currentUser.uid,
//   likes:[],
//   createdDateTime: Timestamp.fromDate(new Date())
// });

export const saveTask = (description) => addDoc(collection(db, 'tasks'), {
  description,
  name: auth.currentUser.displayName,
  uid: auth.currentUser.uid,
  likes: [],
  createdDateTime: Timestamp.fromDate(new Date()),
});

export const getTasks = () => getDocs(collection(db, 'tasks'));
export const onGetTasks = (callback) => {
  dateTask(callback);
};
// export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));
export const getTask = (id) => getDoc(doc(db, 'tasks', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);
export const dateTask = (callback) => {
  const q = query(collection(db, 'tasks'), orderBy('createdDateTime', 'desc'));
  onSnapshot(q, callback);
};

// Create new users

export function registerUser(email, password, callback) {
  // let registerName = document.getElementById('name-usuaria');
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: registerName.value,
      });

      // El usuario ha sido registrado correctamente
      console.log('Usuario registrado correctamente');
      const user = userCredential.user;
      const userId = user.uid;
      console.log(user, userId);
      callback(true);
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
    });
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

export const onAuth = (auth, user) => onAuthStateChanged(auth, user);
export const signOutFirebase = (auth) => signOut(auth);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user is signed in');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else if (signOut) {
    console.log('user is signed out');
    // User is signed out
    // ...
  }
});

// Like function

export const tapLike = (id, newLike) => {
  updateDoc(doc(db, 'tasks', id), {
    likes:
      arrayUnion(
        newLike,
      ),
  });
  // .then(() => console.log("+1 like"))
  // .catch((error) => console.error("Error", error));
};

export const dislike = (id, oldLike) => {
  updateDoc(doc(db, 'tasks', id), {
    likes:
      arrayRemove(
        oldLike,
      ),
  });
  // .then(() => console.log("-1 like"))
  // .catch((error) => console.error("Error", error));
};

export {
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
};
