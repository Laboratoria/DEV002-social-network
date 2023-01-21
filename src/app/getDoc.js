import { database, addDoc, collection, getDocs } from './firebase.js';

const saveTask = (description) => {
  return addDoc(collection(database , 'posts'), {description});

};

// const taskForm = document.getElementById("taskForm") Buscando poder organizar las vistas de los post y poderla mostrar
// const taskContainer = document.getElementById('postsContainer')

// // const getPosts = ( ) => {
// //   getDocs(collection(database , 'posts'))
// // }

// document.addEventListener("DOMContentLoaded", async () => {
//   const querySnapshot = await getDocs(collection(database, "posts"));
//   let html =''

//   querySnapshot.forEach((doc) => {
//     //const posts =posts.database()
//     html += `¨
//             <di>
//                 <h3>${posts.database}</h3>
//             </di>`
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     console.log(postsContainer)
//   })
//   // vamos a mostrar el contenido de los posts en html
 
//    taskContainer.innerHTML= ''
   
// })




//   //   console.log(description)

//   //   saveTask(description.value)
//   //   taskForm.reset()
//   // })
// // })

export { saveTask } 

