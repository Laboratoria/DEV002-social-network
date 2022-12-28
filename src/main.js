// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {login} from './login.js';
import {home} from './home.js'


login();
console.log(home());


const route = {
    "/" :  home,
    "/login": login
}

window.addEventListener('DOMContentLoaded',() =>{
    const main = document.getElementById('containerMain')
    main.appendChild(home())
    main.classList.add('containerMain')
    document.replaceChild('home()')
})


//myFunction();


