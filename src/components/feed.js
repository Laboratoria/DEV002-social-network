//import { onNavigate } from '../js/routes.js'
//import { postsRef } from "./lib/firebase/methodsFirestore.js";
import { posts } from "../main.js";
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

    const createPostButton = document.createElement('button');
    createPostButton.id = 'idCreatePostButton'
    createPostButton.innerHTML = '<i class="fa-solid fa-circle-plus fa-2xl"></i>';

    createPostButton.addEventListener('click', () => openModalAddPost(feedSection));


    const perfilButton = document.createElement('button');
    perfilButton.id = 'idPerfilButton'
    perfilButton.innerHTML = '<i class="fa-regular fa-circle-user fa-2xl"></i>';

    const comentarioButton = document.createElement('button');
    comentarioButton.id = 'idcomentarioButton'
    comentarioButton.innerHTML = '<i class="fa-regular fa-message fa-2xl"></i>';


    createContainerButtons.appendChild(perfilButton);
    createContainerButtons.appendChild(createPostButton);
    createContainerButtons.appendChild(comentarioButton);



    // const modalPost = `
    // <div class = "modal" id = "modalPost">
    // <div class = "container-post" id = "modalContainerPost">
    // <!--<div>${user.perfil}</div>-->
    // <h2 class = "titulo-post">${post.titulo}</h2> 
    // <h3 class = "descripcion-post"> ${post.titulo}</h3> 
    // </div>  
    // </div>
    // `


    // const publicarPostButton = document.createElement('button');
    // publicarPostButton.className = 'post-btn';
    // publicarPostButton.id = 'idPostButton';
    // publicarPostButton.textContent = 'Help!';
    // modalPost.appendChild(publicarPostButton);


    const contenedorPosts = document.createElement('div');
    contenedorPosts.className = 'contenedor-posts';
    feedSection.appendChild(contenedorPosts);

   

    //console.log('posts', posts);
    const postsitos=posts.forEach((post) => {
        console.log(post.data["autor"]);

        const postCreado = document.createElement('div');
        postCreado.className = 'post-div';


        postCreado.innerHTML = `
        <div class = "container-post" id = "ContainerPost">
            <div class = "parte-superior-post">
                <button type="button" class ="button-editar" id="botonEditar"><i class="fa-thin fa-pencil"></i></button>
                <button type="button" class ="boton-eliminar" id="botonEliminar"><i class="fa-thin fa-trash-can"></i></button>
            </div>
            <button type="button" class ="boton-like" id="botonLike"><i class="fa-duotone fa-heart"></i></button>
            <h2 class = "titulo-post">${post.data["titulo"]}</h2> 
            <h3 class = "descripcion-post"> ${post.data["descripcion"]}</h3> 
            <h4 class = "fecha-post">${post.fecha}</h4> 
        </div>  
        `;

        //postCreado.innerHTML=postDiv;
        return postCreado;

    });
    contenedorPosts.append(...postsitos);


    return feedSection;

}

const openModalAddPost = (feedSection) => {
    const containerAddPost = document.createElement('div');
    containerAddPost.className = 'container-add-post';
    feedSection.appendChild(containerAddPost);
    const openModalAddPost = document.createElement('textarea');
    openModalAddPost.className = 'modal-add-post';
    openModalAddPost.id = 'modal-add-post';
    openModalAddPost.placeholder = 'What do you need?'
    containerAddPost.appendChild(openModalAddPost);
    const buttonModal = document.createElement('button');
    buttonModal.type= 'submit';
    buttonModal.textContent = 'submit';
    containerAddPost.appendChild(buttonModal)
    
}

