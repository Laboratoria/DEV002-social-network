import { collection, addDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


export const saveDocs = (titulo , descripcion) => 
addDoc(collection (db, 'posts'),{titulo,descripcion});



export const getDocs = () => {
console.log('task-list')
}


 const postsRef = await getDocs(collection(db, 'posts'));
//  if (postsRef.exists()) {
//     console.log(item.data)
//  }
let html = "";
postsRef.forEach((item) => { /*para traer los posts de mi colección */
// console.log(`${doc.id} => ${doc.data()}`);
 //post.push({ id: item.id, data: item.data() });
 const post = item.data()
 
 html+= `
     <div> 
     <h1> ${post.titulo} </h1> 
     <p> ${post.descripcion} </p>
     </di>`
});
modalPost.innerText = html;
 




 //};
// console.log('posts', posts); 

 
