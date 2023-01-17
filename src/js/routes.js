import { home } from '../components/Home.js';
import { register } from '../components/register.js';
 import {login} from '../components/login.js';
 import {feed} from '../components/feed.js';

const rootDiv = document.getElementById('root');
const routes = {
    '/': home,
    '/register': register,
    '/login': login,
    '/feed': feed,

};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname, // requiere 3 parámetros - 1 estado vacio - asignar título - asignar la ruta//
    );
    while(rootDiv.firstChild){
        rootDiv.removeChild(rootDiv.firstChild);
    }
        
      rootDiv.appendChild = (routes[pathname]());
   };      

  
const componentes = routes[window.location.pathname];

window.onpopstate = () =>{
rootDiv.appendChild(componentes());
};

rootDiv.appendChild(componentes());

