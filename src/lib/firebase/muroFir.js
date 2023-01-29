import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const db = getFirestore();

export const saveTask = (title, description) =>
    addDoc(collection(db, 'tasks'),{title, description});
