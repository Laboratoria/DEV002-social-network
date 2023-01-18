import { onNavigate } from '../js/routes.js'

export const feed = () => {

    const feedSection = document.createElement('section');
    feedSection.className = 'section-feed';

    const titulo = document.createElement('h2');
    titulo.textContent = "Dad's Power";
    titulo.className = 'tituloh2-feed';
    feedSection.appendChild(titulo);

    //const Post = asdasd;
    


    return feedSection;

}