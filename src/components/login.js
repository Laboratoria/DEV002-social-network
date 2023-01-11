export const login = () => {
    const loginPage = document.createElement ('div');
    loginPage.setAttribute('id', 'div-login');
    const insertLogin = `
    <html>
    <header>
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
    <button class="ingresar" id="ingresar"> Ingresar </button>
    <p>¿Aún no tienes una cuenta?</p>
    <button class="registrate" id="registrate">Regístrate</button>

  </div>
  </section>`
  loginPage.innerHTML = insertLogin;
  return loginPage;
};