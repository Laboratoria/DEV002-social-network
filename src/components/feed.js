import { postsRef, savePosts, unsub } from "../lib/firebase/methodsFirestore.js";
//postRefRT,
//import { doc }from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
export const feed = () => {

    const feedSection = document.createElement('section');
    feedSection.className = 'section-feed';

    const containerHeader = document.createElement('div');
    containerHeader.className = 'feed-container-header';

    feedSection.appendChild(containerHeader);


    const titulo = document.createElement('h2');
    titulo.textContent = "Dad's Power";
    titulo.className = 'tituloh2-feed';

    containerHeader.appendChild(titulo);

    const perfil = document.createElement('div')
    perfil.className = 'avatarUser';


    const avatarImg = document.createElement('img');
    avatarImg.className = 'avatarImg';
    avatarImg.src = '/components/imagen/avatar.png';
    perfil.appendChild(avatarImg);

    containerHeader.appendChild(perfil);


    const createContainerButtons = document.createElement('div');
    createContainerButtons.className = 'container-buttons';
    feedSection.appendChild(createContainerButtons);

    const perfilButton = document.createElement('button');
    perfilButton.type = 'button';
    perfilButton.id = 'idPerfilButton';
    perfilButton.className = 'perfil-button';
    perfilButton.innerHTML = '<i class="fa-regular fa-circle-user fa-2xl"></i>';

    const comentarioButton = document.createElement('button');
    comentarioButton.type = 'button';
    comentarioButton.id = 'idcomentarioButton';
    comentarioButton.className = 'comentario-button';
    comentarioButton.innerHTML = '<i class="fa-regular fa-message fa-2xl"></i>';

    const logoutButton = document.createElement('button');
    logoutButton.type = 'button';
    logoutButton.id = 'idlogoutButton';
    logoutButton.className = 'logout-button';
    logoutButton.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket fa-2xl"></i>';

    createContainerButtons.appendChild(perfilButton);
    createContainerButtons.appendChild(comentarioButton);
    createContainerButtons.appendChild(logoutButton);




    //----------------------------------FORMULARIO PARA POSTEAR--------------------------------------------------------------------------

    const formulario = document.createElement('form');
    formulario.method = 'post';
    formulario.id = 'idForm';
    formulario.className = 'formulario-post';
    //console.log(formulario);
    feedSection.appendChild(formulario);


    const publicarPostButton = document.createElement('button');
    publicarPostButton.className = 'post-btn';
    publicarPostButton.type = 'submit';
    publicarPostButton.id = 'idPostButton';
    publicarPostButton.textContent = 'Post';
    formulario.appendChild(publicarPostButton);


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('click');
        let textPost = document.getElementById('idUserPost').value;
        if (textPost === null || textPost === '' || textPost.length == 0){
           alert('escriba un mensaje');
        }
        else{
            savePosts(textPost).then().catch(error => console.log("fallo la promesa para postear", error));
            alert('tu post ha sido publicado');
            unsub(textPost).then(result => console.log(result)).catch(error => console.log("fallo la promesa mostrar en tiempo real los posts existentes", error));
        }
        
        formulario.reset();
    });


    const textoUser = document.createElement('textarea');

    textoUser.className = 'textoUser';
    textoUser.name = 'addpost';
    textoUser.id = 'idUserPost';
    textoUser.placeholder = 'what do you need?';
    formulario.appendChild(textoUser);



//----------------------------MOSTRANDO POSTS EXISTENTES---------------------------------------------------------------------------------

    const contenedorPosts = document.createElement('div');
    contenedorPosts.className = 'contenedor-posts';
    feedSection.appendChild(contenedorPosts);


    // savePosts(textoUser.value).then().catch(error => console.log("fallo la promesa para postear", error));

    postsRef()
        // .postRefRT(postsCollection => {

            //const posts = doc.data();

            Query.forEach((doc) => { /*para traer los posts de mi colección */

                const posts = doc.data();
                //console.log(posts);
                //console.log(posts["fecha"]);
                const postCreado = document.createElement('div');
                postCreado.className = 'post-div';
                postCreado.innerHTML ='';

                if(user.uid === posts.uid){
                postCreado.innerHTML += `
         <div class = "container-post" id = "ContainerPost">
             <div class = "parte-superior-post">
                 <button class ="boton-editar" id="botonEditar" ><i class="fa-solid fa-pencil fa-lg"></i> </button>
                 <button class ="boton-eliminar" id="botonEliminar"><i class="fa-solid fa-trash-can fa-lg"></i></button>
             </div>

             <div class = "parte-inferior-post">
                <!-- <h2 class = "titulo-post">${posts["titulo"]}</h2> -->
                <h4 class = "descripcion-post"> ${posts["descripcion"]}</h4> 
                <button type="button" class ="boton-like" id="botonLike">25 likes<i class="fa-solid fa-heart fa-lg"></i></button>
                <h4 class = "fecha-post">${posts["fecha"]}</h4> 
            </div>

         </div>  
         `
                }else{
                    postCreado.innerHTML += `
                    <div class = "container-post" id = "ContainerPost">
                        <div class = "parte-superior-post">
                        </div>
           
                        <div class = "parte-inferior-post">
                           <!-- <h2 class = "titulo-post">${posts["titulo"]}</h2> -->
                           <h4 class = "descripcion-post"> ${posts["descripcion"]}</h4> 
                           <button type="button" class ="boton-like" id="botonLike">25 likes<i class="fa-solid fa-heart fa-lg"></i></button>
                           <h4 class = "fecha-post">${posts["fecha"]}</h4> 
                       </div>
           
                    </div>  
                    `
                }
         
         ;

                contenedorPosts.append(postCreado);

            });
        



    //MODAL LOG OUT
    const modalLogOut= document.createElement('div');
    modalLogOut.className = 'modal';
    modalLogOut.id = 'idModalLogout';

    modalLogOut.innerHTML =`
        <div class="modal-container" id="modalContainerLogout">
            <h3>Log out of Dad's Power?</h3>
            <button type="button" class ="aceptar-logout" id="botonAceptar"> Ok </button>
            <button type="button" class ="close-modalLogout" id="botonCancelar"> Cancel </button>

        </div>
       `;
    feedSection.appendChild(modalLogOut);

    const closeModal = () => {
        console.log('cerrando');
        modalLogOut.style.display = 'none';
      }
    
    const openModal = () => {
        console.log('hello');
        modalLogOut.style.display = 'flex';
      }

      logoutButton.addEventListener('click',  () =>{
        openModal();
      });
    
   const closeModalLogout = modalLogOut.querySelector('#botonCancelar'); //no se puede usar getElementById porque aun no existe
    if( closeModalLogout)
    { closeModalLogout.addEventListener('click', () =>{closeModal()});}


    return feedSection;

}


