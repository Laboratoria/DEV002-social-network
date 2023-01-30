import { onNavigate } from '../js/routes.js'

export const register = () => {
    
    const signupSection = document.createElement('section');
    signupSection.className = 'sectionSignup-in'
    const titulo = document.createElement('h2');
    titulo.textContent = "Dad's Power";
    titulo.className = 'tituloh2register-login';
    signupSection.appendChild(titulo);

    const formSU = document.createElement('form');
    formSU.className = 'form';
    formSU.method = 'post';
    formSU.id = 'formularioSU';

    const divUser = document.createElement('div');
    divUser.className = 'contenedorForm'
    signupSection.appendChild(divUser);
    divUser.appendChild(formSU);

    const inputUser = document.createElement('input');
    const labelUser = document.createElement('label');
    labelUser.textContent = 'Username';
    labelUser.className ='usuario';  
    formSU.appendChild(labelUser);
    inputUser.type ='user';
    inputUser.className = 'username';
    inputUser.id = 'idUsername';
    inputUser.placeholder = 'Rob Scott';
    formSU.appendChild(inputUser);


    const inputEmail = document.createElement('input');
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'E-mail';
    labelEmail.className = 'labelEmail';
    formSU.appendChild(labelEmail);
    inputEmail.type = 'e-mail';
    inputEmail.className = 'email';
    inputEmail.id = 'idCorreoSU';
    inputEmail.placeholder = 'example@gmail.com'
    formSU.appendChild(inputEmail);

    //considerar agregar una diferencia en el parrafo que se imprima el mensaje de error segun sea para mail o pass
    const errorSignupEmail = document.createElement('p');
    errorSignupEmail.className ='message-error-email'; //aquí debe estar la diferencia en la className, distinto para email y pass
    // errorSignupEmail.textContent = 'Aquí va error para email';
    formSU.appendChild(errorSignupEmail);


    const inputPasword = document.createElement('input');
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password';
    labelPassword.className = 'labelPassword';
    formSU.appendChild(labelPassword);
    inputPasword.type = 'password';
    inputPasword.textContent = 'password';
    inputPasword.className = 'password';
    inputPasword.id = 'idContraseñaSU';
    inputPasword.placeholder = '******'
    formSU.appendChild(inputPasword);

    //considerar agregar una diferencia en el parrafo que se imprima el mensaje de error segun sea para mail o pass
    const errorSignupPassword = document.createElement('p');
    errorSignupPassword.className ='message-error-password'; //aquí debe estar la diferencia en la className, distinto para email y pass
    // errorSignupPassword.textContent = 'Aquí va error para password';
    formSU.appendChild(errorSignupPassword);


    const buttonSU = document.createElement('button');
    buttonSU.type = 'submit';
    buttonSU.textContent = 'submit'
    buttonSU.className = 'btnSubmit';
    buttonSU.id = 'btnEnviarSU';
    formSU.appendChild(buttonSU);

    const tienesCuenta = document.createElement('p');
    tienesCuenta.className = 'p-tienes-cuenta-register';
    tienesCuenta.textContent = 'Already have an account ?';
    formSU.appendChild(tienesCuenta);

     const buttonLogin = document.createElement('a');
     buttonLogin.className = 'signin-a';
    buttonLogin.textContent = 'Sign in';
    buttonLogin.id = 'botonLoguear'; 



    tienesCuenta.appendChild(buttonLogin);
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    return signupSection;
}
