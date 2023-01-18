/*export const login = document.createElement("div")
const inicio = (x) =>{
inicio.innerHTML +=`
<section class="flex-cont">
  <img src="" alt="">
  <h1>We Study</h1>
  <button class="login">Login</button>
  <button class="IniciaSesión">Inicia Sesión</button>
  <button class="Creaunacuenta">Crea una cuenta</button>
</section>


}
login.appendChild(inicio)*/

export const login = () =>{
    const datosDiv = document.createElement("div");

    const buttonLogin = document.createElement("button");
    const buttonIniciaSesion = document.createElement("button");
    const buttonCreaUnaCuenta = document.createElement("button");

    buttonLogin.textContent = "Log in";
    buttonIniciaSesion.textContent = "Inicia Sesión";
    buttonCreaUnaCuenta.textContent = "Crea una cuenta";

    datosDiv.appendChild(buttonLogin);
    datosDiv.appendChild(buttonIniciaSesion);
    datosDiv.appendChild(buttonCreaUnaCuenta);

    return datosDiv;
}
