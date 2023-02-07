import {
  collection, addDoc, getDocs, db,
} from './metFirebase.js';

export const saveTask = (title, description) => addDoc(collection(db, 'tasks'), { title, description });
export const getTasks = () => getDocs(collection(db, 'tasks'));
