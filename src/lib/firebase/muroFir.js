import {
  collection, addDoc, getDocs, db, onSnapshot,
} from './metFirebase.js';

export const saveTask = (title, description) => 
  addDoc(collection(db, 'tasks'), { title, description });
export const getTasks = () => getDocs(collection(db, 'tasks'));
export const onGetTasks = () => console.log('onGetTasks');
export {
  onSnapshot,
  collection,
  db
};
