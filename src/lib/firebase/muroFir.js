import { getFirestore,collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const db = getFirestore();

export const saveTask =  (title, description) => 
    addDoc(collection(db, 'tasks'),{title, description});

    export const getTasks = () => getDocs(collection(db,'tasks'))