import { db } from "../Firebase/firebaseConfig.js";
import {
	getFirestore,
	addDoc,
	getDocs,
	onSnapshot,
	collection,
	deleteDoc,
	doc,
	updateDoc,
	getDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

export const userCollection = collection(db, "usuarios"); //Guardar el usuario que se está creando al momento de registarar.
export const postCollection = collection(db, "posts"); // colección de post en firestore

// export const getDocContent = (id) => getDoc(doc(db, "documents", id));
// export const instantTime = doc;

export const savePost = (postContent, location) =>
	addDoc(postCollection, {
		postContent,
		location,
	});

//export const getPosts = () => getDocs(postCollection);
export const onGetPosts = (callback) => onSnapshot(postCollection, callback);

export const deletePost = (id) => deleteDoc(doc(db, "posts", id));

export const updatePost = (id, newDocPost) =>
	updateDoc(doc(db, "posts", id), newDocPost);

export const getPost = (id) => getDoc(doc(db, "posts", id));
