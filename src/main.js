// Este es el punto de entrada de tu aplicacion

import { login } from "./lib/pages/login.js";
import { router } from "./lib/router.js";

const start = () => {
    document.getElementById('root').appendChild(login());
 }
 
 window.addEventListener('hashchange', () => {
   console.log(`The current URL hash is ${location.hash}`);
    router(window.location.hash);
 });

 window.addEventListener('load', start);

