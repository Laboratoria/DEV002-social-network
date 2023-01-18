import { onNavigate } from '../js/routes.js'

export const feed = () => {

    const feedSection = document.createElement('section');
    feedSection.className = 'section-feed';

    const titulo = document.createElement('h2');
    titulo.textContent = "Dad's Power";
    titulo.className = 'tituloh2-feed';
    feedSection.appendChild(titulo);
     
    const perfil = document.createElement('div') 
    perfil.className = 'avatarUser';
    // const username = document.getElementById('idUsername');
    // username.id = 'idUsername';
    // perfil.appendChild(username);
    // perfil.type = 'file'
    const avatarImg = document.createElement('img');
    avatarImg.className = 'avatarImg';
    avatarImg.src = '/components/imagen/avatar.png';
    perfil.appendChild(avatarImg);
    feedSection.appendChild(perfil);
    
    const postDiv = document.createElement('div');
    postDiv.className = 'post-div';
    feedSection.appendChild(postDiv);
    
    const post = document.createElement('input');
    post.type = 'text';
    post.className ='post-input';
    post.placeholder = 'what do you need?';
    post.id = 'idPost';
    postDiv.appendChild(post);

    const postButton = document.createElement('button');
    postButton.className = 'post-btn';
    postButton.id = 'idPostButton';
    postButton.textContent = 'Help!';
    postDiv.appendChild(postButton);





    return feedSection;

}