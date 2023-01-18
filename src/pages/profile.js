export const profile = () => {
    const divProfile = document.createElement('div');
    divProfile.setAttribute('class', 'container-div-profile');
    const viewProfile = `
    <header>
    <nav class="contenedor-nav"> 
        <li class="perfil-nav"> Perfil </li> 
        <li> 
            <img class="logo-nav" src="./images/logo.png" alt="">
        </li>
    </nav>  
    </header>
    
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
            <textarea name="aboutMe" id="textArea" cols="30" rows="5" placeholder="¿Qué países has visitado? ¿Cuáles países recomiendas y por qué? ¿Qué países estás por visitar?"></textarea>
        </div>
    </section>
    <hr>
    <section class="seccion-publicar">
        <div class="contenedor-publicaciones"> 
            <picture>  <img class="user-logo-publicaciones" src="./images/user.png" alt=""> </picture>
            <div> <input class="input-recomendaciones" type="text" placeholder="¿Cuáles son tus  recomendaciones de hoy?"> </div>
        </div>
        <button class="btn-publicar">Publicar</button>
    </section>
    <hr>
    <section class="seccion-publicar2">
        <div class="contenedor-publicaciones"> 
            <picture>  <img class="user-logo-publicaciones2" src="./images/user.png" alt="user-logo"> </picture>
            <div> <input class="input-publicacion" type="text"> </div> </div>
         <div class="contenedor-likes"> 
            <img class="heart-logo" src="./images/heart.png" alt="heart">
            <p> 3 </p>
        </div>  
        </section>
    
        <nav class="navbar">
            <li class="li-navbar"> <img class="navbar-img" src="./images/home.png" alt="Home"> </li>
            <li class="li-navbar"> <img class="navbar-img" src="./images/profilelogo.png" alt="Profile"> </li>
            <li class="li-navbar"> <img class="navbar-img" src="./images/log-out.png" alt="log-out"> </li>
        </nav>
  `
    divProfile.innerHTML = viewProfile;
    return divProfile;
  };
  