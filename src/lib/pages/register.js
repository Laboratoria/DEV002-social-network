import { createUserWithEmailAndPassword } from "@firebase/auth";
export function register() {

    const containerRegister = document.createElement("main");
    containerRegister.setAttribute("id", "mainRegister");
    containerRegister.classList.add("mainRegister");
    const subTitle = document.createElement("h2");
    subTitle.innerHTML = `Registro de Usuario`;
    const formRegister = document.createElement("form");
    formRegister.classList.add("formRegister");
  
    const inputName = document.createElement("input");
    inputName.setAttribute("id", "nameLastname");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Nombre de usuario");
    inputName.setAttribute("pattern", "[A-Za-zÀ-ÿ .]{1,25}");
    inputName.setAttribute("required", "");
  
    const inputMail = document.createElement("input");
    inputMail.setAttribute("id", "email");
    inputMail.setAttribute("type", "email");
    inputMail.setAttribute("placeholder", "Correo electrónico");
    inputMail.setAttribute("required", "");
  
    const inputPassword = document.createElement("input");
    inputPassword.setAttribute("id", "password");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("placeholder", "Crear contraseña");
    inputPassword.setAttribute("minlength", "6");
    inputPassword.setAttribute("maxlength", "14");
    inputPassword.setAttribute("required", "");
  
    const btnSubmit = document.createElement("input");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.setAttribute("value", "Regístrate");
    btnSubmit.classList.add("submitRegister");
  
    containerRegister.appendChild(subTitle);
    containerRegister.appendChild(formRegister);
    formRegister.appendChild(inputName);
    formRegister.appendChild(inputMail);
    formRegister.appendChild(inputPassword);
    formRegister.appendChild(btnSubmit);
  
    formRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      createUserWithEmailAndPassword(name, email, password);
      window.location.hash= "#/login";
    });
  
    return containerRegister;
  }