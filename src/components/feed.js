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
    const buttonUnpload = document.createElement('input')
    buttonUnpload.className= 'buttonUnpload';
    buttonUnpload.type = 'file';
    buttonUnpload.id = 'perfilAvatar'
    perfil.appendChild(buttonUnpload)
    

    const avatarImg = document.createElement('img');
    avatarImg.className = 'avatarImg';
    avatarImg.src = '/components/imagen/avatar.png';
    perfil.appendChild(avatarImg);
    feedSection.appendChild(perfil);



    
    
    



    return feedSection;

}