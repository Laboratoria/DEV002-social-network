import { getDoc, doc, database, firebaseAuth } from './firebase.js';

// obtener datos
const getPostData = (uid) => {
    getDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid))
};
const getPostData2 = (uid) => {
    getDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid, 'userPosts', uid))
};
  // https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document

export { getPostData, getPostData2 }