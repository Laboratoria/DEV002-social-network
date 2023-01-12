class Post {
<<<<<<< HEAD
    constructor() {
        this.fs = firebase.firestore()
        const settings = {timestampsInSnapShots : true }
         this.fs.settings(settings)
    }

crearPost (uid, titulo , descripcion ) {
return this.fs.colection('post').add({ 
    uid: uid,
    autor: autor,
    titulo: titulo,
    descripcion: descripcion,
    fecha: firebase.firestore.FieldValue.serverTimestamp()

})
.then(refDoc => { // si la creacion fue existosa retorna el el id del post creado del firestore
    console.log(`Id del post => ${refDoc.id}`)
}).catch (error =>{
console.error(`Error creaando el post => ${error}`)
}) 

}
consultarTodosPost() {

}
consultarPostsxUsuario (emailUser){

}
}
=======
  constructor() {
    this.fs = firebase.firestore();
    const settings = { timestampsInSnapshots: true } // fecha válida. timestampsInSnapshots(de firestore viene como timestamp y este métoso lo convierte a datetime que ocupa Js )
    this.fs.settings(settings);
  }
  crearPost(uid, emailUser, titulo, descripcion) {
    return this.fs.collection('posts').add({  // adición de un post. También podemos utilizar nuestro propio Id usando:    .doc("key").set({      
      uid: uid,
      autor: autor,
      titulo: titulo,
      descripcion: descripcion,
      fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(refDoc => { // si la inserción(creación del post) fue exitosa debería dar en la consola el id del post que debería venir del firestore
        console.log(`Id del post =>${refDoc.id}`)
      }).catch(error => {
        console.log(`Error de creación del post =>${error}`);
      })
  }
  consultarTodosPost() {
  }
  consultarPostxUsuario(emailUser) {
  }
}
>>>>>>> ab1ea38750605e19c3e5b69d297337158a5d8b44
