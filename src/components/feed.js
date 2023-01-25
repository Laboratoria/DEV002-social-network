//import { onNavigate } from '../js/routes.js'
import { postsRef, savePosts } from "../lib/firebase/methodsFirestore.js";
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

    // const createPostButton = document.createElement('button');
    // createPostButton.id = 'idCreatePostButton'
    // createPostButton.innerHTML = '<i class="fa-solid fa-circle-plus fa-2xl"></i>';

    // createPostButton.addEventListener('click', () => openModalAddPost(feedSection));


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
    createContainerButtons.appendChild(comentarioButton)
    createContainerButtons.appendChild(logoutButton);


//--------------CREANDO UN NUEVO POST-----------------------------

    const formulario = document.createElement('form');
    formulario.method = 'post';
    formulario.id = 'idForm';
    formulario.className = 'formulario-post';
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
        if (textPost === ''){
           alert('escriba un mensaje');
        }
        else{
            savePosts(textPost).then().catch(error => console.log("fallo la promesa para postear", error));
            alert('tu post ha sido publicado');

        }
        
        formulario.reset();
    });

    const textoUser = document.createElement('textarea');
    textoUser.className = 'textoUser';
   // textoUser.name = 'addpost';
    textoUser.id = 'idUserPost';
    textoUser.placeholder = 'what do you need?'
    formulario.appendChild(textoUser);



//----------------------MOSTRANDO POSTS EXISTENTES-----------------------------

    const contenedorPosts = document.createElement('div');
    contenedorPosts.className = 'contenedor-posts';
    feedSection.appendChild(contenedorPosts);

    postsRef()
        .then(postsCollection => {
            postsCollection.forEach((item) => { /*para traer los posts de mi colección */

                const posts = item.data();
                //console.log(posts);
                //console.log(posts["fecha"]);
                const postCreado = document.createElement('div');
                postCreado.className = 'post-div';


                postCreado.innerHTML = `
         <div class = "container-post" id = "ContainerPost">
             <div class = "parte-superior-post">
                 <button class ="boton-editar" id="botonEditar" ><i class="fa-solid fa-pencil fa-lg"></i> </button>
                 <button class ="boton-eliminar" id="botonEliminar"><i class="fa-solid fa-trash-can fa-lg"></i></button>
             </div>
             <button type="button" class ="boton-like" id="botonLike"><i class="fa-solid fa-heart fa-lg"></i></button>
             <br></br>
             <!-- <h2 class = "titulo-post">${posts["titulo"]}</h2> -->
             <h4 class = "descripcion-post"> ${posts["descripcion"]}</h4> 
              <h4 class = "fecha-post">${posts["fecha"]}</h4> 
         </div>  
         `;
                contenedorPosts.append(postCreado);

            });
        })
        .catch(error => console.log("fallo la promesa de firestore", error))

    return feedSection;

}

