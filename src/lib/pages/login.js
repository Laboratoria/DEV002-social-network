export function login() {

    const containerLogin = document.createElement("main");
    containerLogin.classList.add("mainLogin");
    const subTitleLogin = document.createElement("h2");
    subTitleLogin.innerHTML = `Inicio de Sesión`;
    const formLogin = document.createElement("form");
    formLogin.classList.add("formLogin");
  
    const userLogin = document.createElement("input");
    userLogin.setAttribute("type", "email");
    userLogin.setAttribute("id", "emailLogin");
    userLogin.setAttribute("placeholder", "Ingresa tu correo electrónico");
    userLogin.setAttribute("size", "25");
    userLogin.setAttribute("maxlength", "40");
    userLogin.setAttribute("required", "");
  
    const passwordLogin = document.createElement("input");
    passwordLogin.setAttribute("type", "password");
    passwordLogin.setAttribute("id", "passwordLogin");
    passwordLogin.setAttribute("placeholder", "Ingresa tu contraseña");
    passwordLogin.setAttribute("minlength", "6");
    passwordLogin.setAttribute("maxlength", "12");
    passwordLogin.setAttribute("required", "");
  
    const btnLogIn = document.createElement("button");
    btnLogIn.setAttribute("type", "submit");
    btnLogIn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Iniciar Sesión`;
    
    containerLogin.appendChild(subTitleLogin);
    containerLogin.appendChild(formLogin);
    formLogin.appendChild(userLogin);
    formLogin.appendChild(passwordLogin);
    formLogin.appendChild(btnLogIn);

    return containerLogin;
    
}
