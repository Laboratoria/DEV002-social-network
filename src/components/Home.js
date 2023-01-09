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
    HomeDiv.querySelector('#navLinkCreateAccount').addEventListener('click', () => onNavigate('/signup'));
    HomeDiv.querySelector('#navLinkLogin').addEventListener('click', () => onNavigate('/login'))

    return HomeDiv;
}