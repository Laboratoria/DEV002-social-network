import { AuthAccountFacebook } from '../app/facebookrg.js';

//creamos la función Home que va a contener una variable que será un div que será el resultado que vamos a devolver
export const Login = () => {
    //creamos un div para poderle insertar los dos botones que creamos abajo y con esto poder darle un returny poderlo insertar la nodo
    const LoginDiv = document.createElement('div');
    const template = `
    <section class="email-facebook-page" id="emailFacebookPage">
            <div class="email-facebook-div" id="emailFacebookDiv">
                <button class="email-btn" id="emailBtn">CORREO</button>
                <button class="facebook-btn" id="facebookBtn">FACEBOOK</button>
            </div>
        </section>
    `
    LoginDiv.innerHTML = template 
    // al Div debemos crearle los eventos querySelector.
    LoginDiv.querySelector('#facebookBtn').addEventListener('click', AuthAccountFacebook)

    // //se crean los botones y le damos de una vez el texto que vamos a mostrar
    
    // const buttonRegister = document.createElement ('button');
    // buttonRegister.textContent= 'inicia sesión';

    // const buttonLogin = document.createElement ('button');
    // buttonLogin.textContent= 'Regístrate'; 

    // para poder retornar los botones en un sólo div (empacamos en una "caja")
   //div.append(buttonRegister,buttonLogin);
   //retornamos los botones que metimos en el div
    return LoginDiv;
}