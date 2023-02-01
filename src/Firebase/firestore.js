import { db } from "../Firebase/firebaseConfig.js";
import {
	getFirestore,
	addDoc,
	getDocs,
	onSnapshot,
	collection,
	deleteDoc,
	updateDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const userCollection = collection(db, "usuarios"); //Guardar el usuario que se está creando al momento de registarar.
const postCollection = collection(db, "posts"); // colección de post en firestore

// export const getDocContent = (id) => getDoc(doc(db, "documents", id));
// export const deletePost = (id) => deleteDoc(doc(db, "documents", id));
// export const instantTime = doc;
// export const editPost = (id, newPost) =>
// 	updateDoc(doc(db, "documents", id), newPost);
export const savePost = (post, location) =>
	addDoc(postCollection, {
		post,
		location,
	});

export const getPost = () => getDocs(postCollection);

export { collection, onSnapshot, getFirestore };
