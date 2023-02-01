import { app } from "../Firebase/firebaseConfig.js";
import {
	getFirestore,
	getDoc,
	getDocs,
	doc,
	setDoc,
	collection,
	deleteDoc,
	updateDoc,
	addDoc,
	onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { auth } from "./firebase.js";

export const db = getFirestore();
export const userCollection = collection(db, "usuarios"); //Guardar el usuario que se está creando al momento de registarar.
export const postCollection = collection(db, "posts");
export const getDocContent = (id) => getDoc(doc(db, "documents", id));
export const getPosts = await getDocs(collection(db, "documents"));
export const deletePost = (id) => deleteDoc(doc(db, "documents", id));
export const instantTime = doc;
export const editPost = (id, newPost) =>
	updateDoc(doc(db, "documents", id), newPost);
export const addPost = (post) =>
	addDoc(collection(db, "documents"), {
		post,
		user: auth.currentUser.displayName,
		uid: auth.currentUser.uid,
		likes: [],
	});

export { collection, onSnapshot };
