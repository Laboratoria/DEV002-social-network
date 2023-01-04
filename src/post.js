class Post {
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