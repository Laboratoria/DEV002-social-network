import {
  collection, addDoc, getDocs, db, deleteDoc, onSnapshot, doc, getDoc, updateDoc,
} from './metFirebase.js';

export const saveTask = (title, description) => {
  const newPost = {
    likes: 0,
    title: title,
    description: description,
  };
  addDoc(collection(db, 'tasks'), newPost);
};
export const getTasks = () => getDocs(collection(db, 'tasks'));
export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));
export const getTask = (id) => getDoc(doc(db, 'tasks', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);
