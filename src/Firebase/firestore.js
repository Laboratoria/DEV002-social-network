import { app } from '../Firebase/firebaseConfig.js';
import { db } from '../Firebase/firebaseConfig.js';
import { getFirestore, getDoc, doc, setDoc, collection, deleteDoc, updateDoc, addDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';


export const userCollection = collection(db, "usuarios");
export const postCollection = collection(db, "posts");
export const getDocContent = (id) => getDoc(doc(db, "documents", id));
export const deletePost = (id) => deleteDoc(doc(db, "documents", id));
export const editPost = (id, newPost) => updateDoc(doc(db, "documents", id), newPost);
export const addPost = (post) => addDoc (collection(db, "documents", post), {
    post,
    likes: [],
});



