import { updateDoc, doc, database, firebaseAuth, arrayRemove } from './firebase.js';

// NECESITAMOS IMPORTAR EL CURRENT USER

const dislikePost = (uid, likes, userLike) => {
    updateDoc(doc(database, 'usuarios', firebaseAuth.currentUser.uid, 'userPosts', uid),
    { amountLikes: likes, arrayUsersLikes: arrayRemove(userLike) })
};

export { dislikePost }

// va con await
// https://firebase.google.com/docs/firestore/manage-data/add-data#update-data