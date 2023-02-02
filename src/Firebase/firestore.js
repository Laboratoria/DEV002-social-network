//import { app } from '../Firebase/firebaseConfig.js';
import { db } from '../Firebase/firebaseConfig.js';
import { getFirestore, getDoc, getDocs, doc, setDoc, collection, deleteDoc, updateDoc, addDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { auth } from './firebase.js';



export const userCollection = () => getDocs(collection(db, "usuarios"));
export const postCollection = () => getDocs(collection(db, "posts"));
export const getDocContent = (id) => getDoc(doc(db, "documents", id));
export const getPosts = () => getDocs(collection(db, 'documents'))
export const deletePost = (id) => deleteDoc(doc(db, "documents", id));
export const onGetPosts = (callback) => onSnapshot(collection(db, 'documents'), callback)
export const editPost = (id, newPost) => updateDoc(doc(db, "documents", id), newPost);
export const addPost = (post) => addDoc (collection(db, "documents"), {
    post,
    user: auth.currentUser.displayName,
    uid: auth.currentUser.uid,
    likes: [],

});



export {collection, onSnapshot, db}


