import './app/firebase.js';
import './app/register.js';
import './app/facebookrg.js';

// // Este es el punto de entrada de tu aplicacion
// import { loadHome } from './lib/index.js';

// loadHome();
// main.js debe ser el punto de salida de nuestra aplicación, acá conectamos la lógica con lo que se imprime en pantalla. se invoca o manda a ejecutar
// construimos una variable routes que contiene un objeto el cuál contiene las rutas que debe renderizar, vamos a buscar que renderice nuestras variables con un template string
//importamos las funciones que estamos creando en cada carpeta de los componentes para que se encuentren disponibles y se puedan renderizar
import { Home } from './components/Home.js';
import { Signup } from './components/Signup.js';
import { Login } from './components/Login.js';
import { Feed } from './components/Feed.js';
import { EmailLogin } from './components/Email-login.js';
import { RecoverPsw } from './components/recoverpsw.js';

const rootDiv = document.getElementById('root');

const routes = {
    '/': Home,
    '/signup': Signup,
    '/login': Login,
    '/feed': Feed,
    '/emaillogin': EmailLogin,
    '/recoverpsw': RecoverPsw
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {state:pathname},
        pathname,
        window.location.origin + pathname
    );
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    root.appendChild(routes[pathname]());
};

function render() {
   const component = routes[window.location.pathname];
    rootDiv.replaceChildren (component());
}


window.addEventListener('popstate', render);  
window.addEventListener('load', render) 