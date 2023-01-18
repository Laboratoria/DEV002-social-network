import { doc, setDoc, collection } from './firebase.js'

// const postCollectionRef = collection(db, 'posts')
const createPost = async ()=>{
    await setDoc(doc(db, 'posts', ), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
}