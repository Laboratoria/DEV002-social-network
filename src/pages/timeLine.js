/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { signOutFirebase, auth } from '../firebase/configuracion.js';

export const timeLine = () => {
  const divTimeLine = document.createElement('div');
  divTimeLine.setAttribute('class', 'container-div-timeLine');
  const viewTimeLine = `
    <header class="contenedor-nav">
        <li class="perfil-nav"> Timeline </li>
        <li>
            <img class="logo-nav" src="./images/logo.png" alt="">
        </li>
    </header>
    
    <nav class="navbar">
        <a href="/timeLine">
           <li class="li-navbar"> <img class="navbar-img" src="./images/home.png" alt="Home"> </li>
        </a>
        <a href="/profile">
            <li class="li-navbar"> <img class="navbar-img" src="./images/profilelogo.png" alt="Profile"> </li>
        </a>
        <a href="/login">
           <li class="li-navbar-logout"> <img id="log-out" class="navbar-img" src="./images/log-out.png" alt="log-out"> </li>
        </a>
    </nav>

    <nav class="navbar-desktop" id="navbar-desktop">
        <a href="/timeLine">
            <li class="li-navbar"> Timeline </li>
        </a>
        <a href="/profile">
            <li class="li-navbar"> Perfil </li>
        </a>
        <a href="/login">
            <li class="li-navbar-logout" id="li-navbar-logout"> Cerrar sesión </li>
        </a>
    </nav>

    <section class="seccion-publicar">
        <div class="contenedor-publicaciones">
            <picture>  <img class="user-logo-publicaciones" src="./images/woman-logo.png" alt=""> </picture>
                <form id="task-form" class="task-form"> 
                    <p class="nombreUsuaria" id="nombreUsuaria"> </p>
                    <p class="pais-actual id="pais-actual"> </p>
                    <label for="description"> </label>
                    <textarea  id="task-description" rows="6" class="input-recomendaciones" type="text" placeholder="¿Cuáles son tus  recomendaciones de hoy?"></textarea> 
                    <button class="btn-publicar" id="btn-publicar">Publicar</button>
                 </form>
        </div>
    </section>
    <hr>
    <section class="seccion-publicar2">
        <div class="contenedor-publicaciones2" id="contenedor-publicaciones">
    </div>
    </section>

    
`;
  divTimeLine.innerHTML = viewTimeLine;

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#li-navbar-logout').addEventListener('click', () => {
      console.log('botón cerrar sesión');
      signOutFirebase(auth);
      console.log('cerró sesión');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#log-out').addEventListener('click', () => {
      console.log('botón cerrar sesión');
      signOutFirebase(auth);
      console.log('cerró sesión');
    });
  });

  return divTimeLine;
};
