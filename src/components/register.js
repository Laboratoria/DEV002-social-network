export const register = () => {
    
    const signupSection = document.createElement('section');
    signupSection.className = 'sectionSignup'
    const titulo = document.createElement('h2');
    titulo.textContent = "Dad's Power";
    titulo.className = 'tituloh2register';
    signupSection.appendChild(titulo);

    const formSU = document.createElement('form');
    formSU.className = 'form';
    formSU.id = 'formularioSU';

    const divUser = document.createElement('div');
    divUser.className = 'contenedorForm'
    signupSection.appendChild(divUser);
    divUser.appendChild(formSU);

    const inputUser = document.createElement('input');
    const labelUser = document.createElement('label');
    labelUser.textContent = 'username';
    labelUser.className ='usuario'
    inputUser.setAttribute('name','username');
    formSU.appendChild(labelUser);
    inputUser.setAttribute('type', 'user');
    inputUser.className = 'username';
    inputUser.id = 'idUsername';
    inputUser.placeholder = 'Amy Schumer';
    formSU.appendChild(inputUser);


    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'e-mail');
    inputEmail.className = 'email';
    inputEmail.id = 'idCorreoSU';
    inputEmail.placeholder = 'example@gmail.com'
    formSU.appendChild(inputEmail);


    const inputPasword = document.createElement('input');
    inputPasword.type = 'password';
    inputPasword.textContent = 'password';
    inputPasword.className = 'password';
    inputPasword.id = 'idContraseñaSU';
    inputPasword.placeholder = '*******'
    formSU.appendChild(inputPasword);


    const buttonSU = document.createElement('button');
    buttonSU.type = 'submit';
    buttonSU.textContent = 'submit'
    buttonSU.className = 'btnSubmit';
    buttonSU.id = 'btnEnviarSU';
    formSU.appendChild(buttonSU)

    const errorSignup = document.createElement('p');
    errorSignup.className ='message-error';
    formSU.appendChild(errorSignup);

    return signupSection;
}
