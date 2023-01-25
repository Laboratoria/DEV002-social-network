export const profile = () => {
  const divProfile = document.createElement('div');
  divProfile.setAttribute('class', 'container-div-profile');
  const viewProfile = `
    <header class="contenedor-nav"> 
        <li class="perfil-nav"> Perfil </li> 
        <li> 
            <img class="logo-nav" src="./images/logo.png" alt="">
        </li> 
    </header>
    <hr>
    <nav class="navbar">
        <a href="/timeLine">
            <li class="li-navbar"> <img class="navbar-img" src="./images/home.png" alt="Home"> </li>
        </a>
    
        <a href="/profile">
            <li class="li-navbar"> <img class="navbar-img" src="./images/profilelogo.png" alt="Profile"> </li>
        </a>

        <a href="/login">
            <li class="li-navbar-logout"> <img class="navbar-img" src="./images/log-out.png" alt="log-out"> </li>
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
            <li class="li-navbar-logout"> Cerrar sesión </li>
        </a>
    </nav>
    
    <section class="foto-perfil">
        <img class="user-logo" src="./images/user.png" alt="">
        <p class="p-actualizar-foto">Actualizar foto de perfil</p>
    </section>
    
    <section class="about-me"> 
        <div class="datos-personales"> 
            <p class="nombre-datos">Nombre</p>
            <p class="edad-datos">Edad</p>
            <p class="pais-datos">País de residencia</p>
            <p class="ubicacion-datos">Ubicación actual</p>
        </div>    
    </section>
    <section class="contenedor-about-me">
        <div class="input-about-me"> 
            <textarea name="aboutMe" id="textArea" class="textArea" cols="30" rows="5" placeholder="¿Qué países has visitado? ¿Cuáles países recomiendas y por qué? ¿Qué países estás por visitar?"></textarea>
        </div>
    </section>
 
  `;
  divProfile.innerHTML = viewProfile;
  return divProfile;
};
