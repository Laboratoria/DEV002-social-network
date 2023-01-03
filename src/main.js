// Este es el punto de entrada de tu aplicacion

 //import { registerUser } from './index.js';

// myFunction();

const indexRegistro = document.getElementById('containerRegister');
const indexInicioSesion = document.getElementById('container');
const btnRegistrate = document.getElementById('registrate')

btnRegistrate.addEventListener('click', () => {
  console.log("click")
  indexInicioSesion.style.display = "none";
  indexRegistro.style.display = "block";
});

// Obtén el botón de registro y asigna un evento click
const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', () => {
  // Obtén el correo y la contraseña de los inputs
  const email = document.getElementById('emailRegister').value;
  const password = document.getElementById('passwordRegister').value;
  // Llama a la función de registro
  registerUser(email, password);
});
// function registrar () {
//     let btnIngresar = document.getElementById('ingresar')
//     let email = document.getElementById('email').value;
//     let contrasena = document.getElementById('password').value;

//     btnIngresar.addEventListener('click', () => {
//         console.log(email)
//         console.log(contrasena)
//     });
// }

// window.addEventListener('load', registrar);

// Obtén el botón de registro y asigna un evento click

