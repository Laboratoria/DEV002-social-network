import { onNavigate } from '../main.js';

//creamos la función Home que va a contener una variable que será un div que será el resultado que vamos a devolver
export const Home = () => {
    //creamos un div para poderle insertar los dos botones que creamos abajo y con esto poder darle un returny poderlo insertar la nodo
    const HomeDiv = document.createElement('div');
    const template = `
        <section class="home" id="home">
            <div class="home-div" id="homeDiv">
                <a class="home-create-account-intro">
                <h1 class="hello-home">
                    ¡Hola!
                </h1>
                    Hemos pensado para tí y tu amo esta novedosa red social dónde la
                    estrella serás tú.
                </a>
                <a class="home-question">¿Qué quieres hacer hoy?</a>
                <button class="home-create-account" id="navLinkCreateAccount">
                    REGISTRARSE
                </button>
                <button class="home-create-account" id="navLinkLogin">
                    INICIAR SESIÓN
                </button>
            </div>
        </section>
    `
    HomeDiv.innerHTML = template 
    // al Div debemos crearle los eventos querySelector.
    HomeDiv.querySelector('#navLinkCreateAccount').addEventListener('click', () => onNavigate('/signup'));
    HomeDiv.querySelector('#navLinkLogin').addEventListener('click', () => onNavigate('/login'))

    // //se crean los botones y le damos de una vez el texto que vamos a mostrar
    
    // const buttonRegister = document.createElement ('button');
    // buttonRegister.textContent= 'inicia sesión';

    // const buttonLogin = document.createElement ('button');
    // buttonLogin.textContent= 'Regístrate'; 

    // para poder retornar los botones en un sólo div (empacamos en una "caja")
   //div.append(buttonRegister,buttonLogin);
   //retornamos los botones que metimos en el div
    return HomeDiv;
}