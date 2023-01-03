// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const indexRegistro = document.getElementById('containerRegister');
const indexInicioSesion = document.getElementById('container');
const btnRegistrate = document.getElementById('registrate')

btnRegistrate.addEventListener('click', () => {
  console.log("click")
  indexInicioSesion.style.display = "none";
  indexRegistro.style.display = "block";
});

function registrar () {
    let btnIngresar = document.getElementById('ingresar')
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('password').value;

    btnIngresar.addEventListener('click', () => {
        console.log(email)
        console.log(contrasena)
    });
}

window.addEventListener('load', registrar);
