/* eslint-disable no-unused-vars */
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
export const app = initializeApp(firebaseConfig); // Inicializa una instancia de Firebase
export const auth = getAuth(app); // Obtiene un servicio de autenticación de Firebase a partir de la instancia inicializada
export const provider = new GoogleAuthProvider(app);// Crea un proveedor de autenticación de Google a partir de la instancia de Firebase.
export const db = getFirestore(app);// Obtiene un servicio de base de datos de Firestore de Firebase a partir de la instancia inicializada.
export const user = () => auth.currentUser;// Define una función que devuelve el usuario actualmente autenticado en Firebase.

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

// Estas funciones realizan una operación específica en la colección de tareas en Firestore.
export const getTasks = () => getDocs(collection(db, 'tasks')); // Obtiene todos los documentos de la colección de tareas utilizando la función getDocs.
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id)); // Elimina un documento específico de la colección de tareas utilizando la función deleteDoc con su id.
export const getTask = (id) => getDoc(doc(db, 'tasks', id));// Obtiene un documento específico de la colección de tareas utilizando la función getDoc con el id.
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);// Actualiza un documento específico de la colección de tareas utilizando la función updateDoc.
export const dateTask = (querySnapshot) => { // 0rdena todos los documentos en la colección de tareas por fecha y hora de creación en orden descendente utilizando la función query y orderBy
  const q = query(collection(db, 'tasks'), orderBy('createdDateTime', 'desc'));// escucha los cambios de la coleccion con la función onSnapshot
  onSnapshot(q, querySnapshot);// querySnapshot contiene información sobre los documentos devueltos por la consulta en tiempo real.
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
      saveUser(user.displayName, userId, email, pais);
      callback(true); // / Se llama una función de callback para indicar que el registro se ha realizado correctamente.
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
    .then(() => { // mover a arriba
      sendEmailVerification(auth.currentUser);
    });
}

// inicio de sesión con email
export async function inicioDeSesionEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userId = user.uid;
    return true; // Si la operación es exitosa, la función imprime un mensaje "signed in" y devuelve true.
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
    window.location.href = '/timeLine';
  } catch (error) {
    // console.log(error);
  }
};

// Cerrar sesión

export const signOutFirebase = (auth) => auth.signOut(); // llama a su método signOut() que termina la sesión actual.

export const onAuth = (auth) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user is signed in');
    } else {
      console.log('user is signed out');
    }
  });
};

// Like function

export const tapLike = (id, newLike) => {
  updateDoc(doc(db, 'tasks', id), { // Actualiza el documento en la colección "tasks" con el
    likes: // identificador "id" agregando un nuevo elemento "newLike" a la lista de "likes"
      arrayUnion( // Permite agregar un nuevo elemento a un campo en la base de datos
        newLike,
      ),
  });
};

export const dislike = (id, oldLike) => { // Se realiza la operación opuesta, eliminando un elemento "oldLike" de la lista de "likes".
  updateDoc(doc(db, 'tasks', id), { // updateDoc actualiza el documento en la base de datos y doc toma como argumentos db, task y id
    likes:
      arrayRemove( // Permite eliminar un elemento en la base de datos.
        oldLike,
      ),
  });
};

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getFirestore,
  arrayRemove,
  collection,
  onSnapshot,
  arrayUnion,
  updateDoc,
  deleteDoc,
  Timestamp,
  signOut,
  getDocs,
  getDoc,
  addDoc,
  doc,
};
