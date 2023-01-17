export const login = () => {

    const signinSection = document.createElement('section');
    signinSection.className = 'sectionSignup-in'
    const titulo = document.createElement('h2');
    titulo.textContent = "Dad's Power";
    titulo.className = 'tituloh2register-login';
    signinSection.appendChild(titulo);

    const formSI = document.createElement('form');
    formSI.className = 'form';
    formSI.id = 'formularioSI';

    const divUser = document.createElement('div');
    divUser.className = 'contenedorForm'
    signinSection.appendChild(divUser);
    divUser.appendChild(formSI);


    const inputEmail = document.createElement('input');
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'E-mail';
    labelEmail.className = 'labelEmailLogin';    
   
    formSI.appendChild(labelEmail);
    inputEmail.type = 'e-mail';
    inputEmail.className = 'email';
    inputEmail.id = 'idCorreoSI';
    inputEmail.placeholder = 'example@gmail.com'
    formSI.appendChild(inputEmail);

    //considerar agregar una diferencia en el parrafo que se imprima el mensaje de error segun sea para mail o pass
    const errorSigninEmail = document.createElement('p');
    errorSigninEmail.className = 'message-error-email-login'; //aquí debe estar la diferencia en la className, distinto para email y pass
    // errorSigninEmail.textContent = 'Aquí va error para email';
    formSI.appendChild(errorSigninEmail);

    const inputPasword = document.createElement('input');
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password';
    labelPassword.className = 'labelPasswordLogin';
    formSI.appendChild(labelPassword);
    inputPasword.type = 'password';
    inputPasword.textContent = 'password';
    inputPasword.className = 'password';
    inputPasword.id = 'idContraseñaSI';
    inputPasword.placeholder = '******'
    formSI.appendChild(inputPasword);

    //considerar agregar una diferencia en el parrafo que se imprima el mensaje de error segun sea para mail o pass
    const errorSigninPassword = document.createElement('p');
    errorSigninPassword.className = 'message-error-password-login'; //aquí debe estar la diferencia en la className, distinto para email y pass
    // errorSigninPassword.textContent = 'Aquí va error para password';
    formSI.appendChild(errorSigninPassword);

    const buttonSI = document.createElement('button');
    buttonSI.type = 'submit';
    buttonSI.textContent = 'submit'
    buttonSI.className = 'btnSubmit';
    buttonSI.id = 'btnEnviarSI';
    formSI.appendChild(buttonSI);

    const buttonGoogle = document.createElement('button');
    buttonGoogle.textContent = 'Sign in with Google'
    buttonGoogle.type = 'button';
    buttonGoogle.className = 'btnGoogle';
    buttonGoogle.id = 'entrarGoogle';

    const imagenGoogle = document.createElement('img');
    imagenGoogle.src = '/img/google.png';
    imagenGoogle.className = 'imgGoogle';

   buttonGoogle.appendChild(imagenGoogle);
    formSI.appendChild(buttonGoogle);

    return signinSection;
}