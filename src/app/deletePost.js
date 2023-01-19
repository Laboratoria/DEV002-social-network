import { deleteDoc, doc, database, firebaseAuth } from './firebase.js';

// NECESITAMOS IMPORTAR EL CURRENT USER

const deletePost = (uid) => {
    deleteDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid, 'userPosts', uid))
};

export { deletePost }

// va con await
// https://firebase.google.com/docs/firestore/manage-data/delete-data