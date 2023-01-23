class Post {
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
    