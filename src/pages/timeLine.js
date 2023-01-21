export const timeLine = () => {
  const divTimeLine = document.createElement('div');
  divTimeLine.setAttribute('class', 'container-div-timeLine');
  const viewTimeLine = `
    <header>
<nav class="contenedor-nav">
    <li class="perfil-nav"> Timeline </li>
    <li>
        <img class="logo-nav" src="./images/logo.png" alt="">
    </li>
</nav>
</header>
<section class="seccion-publicar">
    <div class="contenedor-publicaciones">
        <picture>  <img class="user-logo-publicaciones" src="./images/user.png" alt=""> </picture>
        <form id="task-form"> 
            <label for="description"> Description </label>
            <textarea  id="task-description" rows="3" class="input-recomendaciones" type="text" placeholder="¿Cuáles son tus  recomendaciones de hoy?"> </textarea> 
    
    <button class="btn-publicar" id="btn-publicar">Publicar</button>
    </form>
    </div>
</section>
<hr>
<section class="seccion-publicar2">
    <div class="contenedor-publicaciones2" id="contenedor-publicaciones">
    
        </div>

        <div class="contenedor-likes">
            <img class="heart-logo" src="./images/heart.png" alt="heart">
            <p> 3 </p>
        </div>
    </div> 
    
    </section>

    <nav class="navbar">
        <a href="/timeLine">
           <li class="li-navbar"> <img class="navbar-img" src="./images/home.png" alt="Home"> </li>
        </a>

        <a href="/profile">
            <li class="li-navbar"> <img class="navbar-img" src="./images/profilelogo.png" alt="Profile"> </li>
        </a>

        <a href="/login">
           <li class="li-navbar"> <img class="navbar-img" src="./images/log-out.png" alt="log-out"> </li>
        </a>
    </nav>
`;
  divTimeLine.innerHTML = viewTimeLine;
  return divTimeLine;
};
