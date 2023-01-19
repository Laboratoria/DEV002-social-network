import { updateDoc, doc, database, firebaseAuth, arrayUnion } from './firebase.js';

// NECESITAMOS IMPORTAR EL CURRENT USER

const likePost = (uid, likes, userLike) => {
    updateDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid, 'userPosts', uid),
    { amountLikes: likes, arrayUsersLikes: arrayUnion(userLike) })
};

export { likePost }

// va con await
// https://firebase.google.com/docs/firestore/manage-data/add-data#update-data