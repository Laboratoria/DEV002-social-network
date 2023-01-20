import { signOutFun } from '../app/signOut.js';
import { onNavigate } from '../main.js';
import { firebaseAuth, getDoc, getOnDatas, getPost } from '../app/firebase.js';
import { saveTask } from '../app/getDoc.js';



export const Feed = () => {
    const FeedDiv = document.createElement('div');
    const template = `
    <section class="logo-feed" id="logoFeed">
        <nav class="nav-bar">
                <img src="../Assets/Petblr-blanco.png"  alt="logo" class="logo-feed-img" id="logoFeedImg">
            <ul class="nav-menu" id="navMenu">
                <li class="nav-item-li">
                    <a href="#" class="nav-link" id="navLinkFeed">Muro</a>
                </li>
                <li class="nav-item-li">
                    <a href="#" class="nav-link" id="navLinkProfile">Perfil</a>
                </li>
                <li class="nav-item-li">
                    <a href="#" class="nav-link" id="navLinkCloseSession">Cerrar sesión</a>
                </li>
            </ul>
            <div class="hamburger-div" id="hamburgerDiv">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </section>
    <section class="create-post" id="createPostBtn">
        <button class="create-post-button" id="createPostButton">CREAR PUBLICACIÓN</button>
    </section>
    <section class="posts" id="posts">
        <form class="task-form" id="taskForm">
            <label for="user">Usuario</label>
            <textarea class="posts-div-p" id="postsTextArea" rows="3" placeholder="PUBLICACIÓN"></textarea>
            <button class="create-post-btn" id="createPostBtn">Publicar</button>
        </form>
    </section>
    <div id="postsContainer">
    
    </div>
    `
    FeedDiv.innerHTML = template
    const hamburger = FeedDiv.querySelector('#hamburgerDiv')
    const navMenu = FeedDiv.querySelector('#navMenu')
    hamburger.addEventListener('click', ()=>{
        // añade clases de css existan o no
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    })
    FeedDiv.querySelector('#navLinkFeed').addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
    FeedDiv.querySelector('#navLinkProfile').addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
    FeedDiv.querySelector('#navLinkCloseSession').addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        signOutFun(firebaseAuth)
        onNavigate('/')
    })
    
    const taskForm = FeedDiv.querySelector('.task-form')
    taskForm.addEventListener ('submit', (e) => {
       e.preventDefault()
       const description = taskForm["postsTextArea"]
       saveTask(description.value)
       taskForm.reset();
    })
    
    getOnDatas((listasPosts) => {
        postsContainer.innerHTML =''
        listasPosts.forEach((postsContent)=>{
        const lista = postsContent.data();
            postsContainer.innerHTML += `
            
        <section class="btn-posts" id="btnPosts">        
        <div class="posts-div-btns" id="postsDivBtns">            
            <button class="paw-posts-div-btns"><img src="../Assets/pata-blanca.png"  alt="white_paw" class="paw-img" id="pawPostsDivBtns" ></button>
            <button class="edit-posts-div-btns" id="editPostsDivBtns">Editar</button>
        </div>
        <section class="posts" id="posts"><div>
        <h3>${lista.description}</h3>
    </div></section></section>
            `
        })
    const btnEditDiv= FeedDiv.querySelectorAll(".edit-posts-div-btns");
    btnEditDiv.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            console.log(e, "este es el evento")
        })
    })
       
        
    })

    
   
    
    
       return FeedDiv;
}



/*
<div class="posts-background" id="postsBackground">
    <label>Post:</label>
    <textarea class="posts-div-p" id="postsTextArea" placeholder="PUBLICACIÓN"></textarea>
    <button class="create-post-button">Publicar</button>
</div>
*/

/*
<label for="title">Title</label>
<input type="text" placeholder="task title" id="taskTitle">
*/