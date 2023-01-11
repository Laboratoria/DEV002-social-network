export const Home = () => {
  const view = `
<div class="container" id="container"> 
  <figure class="logo-inicio-sesion"> 
    <img class="logo" src="./images/logo.png" alt="Imagen de un avión dando la vuelta al mundo">
  </figure>
  <section class="section-inicio-sesion" id="sectionOne">   
    <h1 class="title">Journey Mates 🛫 </h1>
    <h2 class="inicia-sesion-h2">Inicia sesión</h2>
    <img class="logo-google" id="inicio-sesion-google" src="./images/google buttons/google_signin_buttons/web/2x/1.google-button.png" alt="">
    <p class="or">O</p>
    <input id="email" type="email" placeholder="Correo electrónico*" autocomplete="email" required> <br>
    <input id="password" type="password" placeholder="Contraseña*" autocomplete="current-password" required> <br>
    <a href= "#/1/"> 
       <button class="ingresar" id="ingresar"> Ingresar </button>
    </a>
    <p>¿Aún no tienes una cuenta?</p>

    <a href= "#/2/"> 
        <button class="registrate" id="registrate"> Regístrate </button>
    </a>

  </div>
  </section>
`
return view
};

//  export const Home = () =>{
//     const HomeDiv= document.createElement("div");
//     const botonRegistro=document.createElement("button");
//     const botonIniciar=document.createElement("button");
//     botonRegistro.textContent = 'Registrate';
//     botonIniciar.textContent = 'Inicia sesión';

//     HomeDiv.appendChild(botonIniciar);
//     HomeDiv.appendChild(botonRegistro);

//     return HomeDiv;
// };