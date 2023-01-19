import { firebaseAuth, onAuthStateChanged } from './firebase.js';

  const currentUser = {};
  const getCurrentUser = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            currentUser.email = user.email;
            currentUser.uid = user.uid;
            currentUser.displayName = user.displayName;
            currentUser.petName = user.petName;
            currentUser.username = user.username;
        }
    })
  }
  export {getCurrentUser}

  //https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user