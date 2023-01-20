import { database, addDoc, collection, getDocs } from './firebase.js';

const saveTask = (description) => {
  return addDoc(collection(database , 'posts'), {description })

};

// const taskForm = document.getElementById("taskForm")
const taskContainer = document.getElementById('taskContainer')

// const getPosts = ( ) => {
//   getDocs(collection(database , 'posts'))
// }

document.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getDocs(collection(database, "posts"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
   
})

// taskForm.addEventListener ('submit', (e) => {
//   e.preventDefault()
//   const description = taskForm["postsTextArea"]
//   console.log(description.value)
// })

// const createPostBtn =document.getElementById ("createPostBtn") 
// createPostBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   taskForm.addEventListener ('submit', (e) => {
//     e.preventDefault()
//     const description = taskForm["postsTextArea"]
//     console.log(description.value)
//   })
// })

// window.addEventListener("DOMContentLoaded", async () => {
//   const querySnapshot = await getTask()
//   onSnapshot(collection (database, 'task'),(querySnapshot) => {
//     let html = '';
//     querySnapshot.forEach((doc) => {
//       const task = doc.data();
//       html += `
//       <div>
//       <h3>${task.title}</h3>
//       <p>${task.description}</p>
//       </div>
//       `;
//     });
//     taskContainer.innerHTML = html;
//   });

  // taskForm.addEventListener ('submit', (e) => {
  //   e.preventDefault()
  //   const description = taskForm["postsTextArea"]

  //   console.log(description)

  //   saveTask(description.value)
  //   taskForm.reset()
  // })
// })

export { saveTask } 

