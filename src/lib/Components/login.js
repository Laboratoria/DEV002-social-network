// import { onNavigate } from "../../main.js";
export const login = () => {
    const divLogin = document.createElement('div');
    divLogin.setAttribute('id', 'div-login');
    const viewLogin = `
    <html>
    <header>
    <img src='./images/logo.png' alt='logoReading' class='img-logo'>
    <button type='button' id='btn-sign-out'>Cerrar sesion</button>
    <div class='container-images'>
</div>
</header>
<main id='container-posts'>
  <div id='container-btn-input'>
   <img id='img-input' src='images/Usuario.png' alt='profile'>
  <button type='button' id='btn-input-modal'>Deja aqui la reseña de tu libro...</button>
  </div>
   <div id='modal-background-post'>
    <div id='modal-content-post'>
    <div id='space-line'>
    <p>Crear Reseña</p>
    <img src='images/Cerrar.png' class='btn-exit'>
    </div>
    <div id='line'></div>
    <div id='after-line'>
    <div id='container-img-text'>
    <img id='img-modal-post' src='images/Usuario.png' alt='profile'>
    <div id='container-text'></div>
    </div>
    <textarea type='text' id='input-post' placeholder=''>Deja aqui la reseña de tu libro</textarea>
      <button disabled type='button' id='btn-post' class='btn-post-inactive'>PUBLICAR</button>
    </div>
   </div>
  </div>
  </div>
  <div id='div-post'></div>
  <div id='container-modal-delete'></div>
</main>`

    divLogin.innerHTML = viewLogin;
    return divLogin;

};
