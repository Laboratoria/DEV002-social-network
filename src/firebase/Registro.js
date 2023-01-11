//Este es el punto de entrada de tu aplicacion
import { registerUser } from './configuracion.js';
import { GoogleAuthProvider } from "firebase/auth";

// myFunction();
const indexRegistro = document.getElementById('containerRegister');
const indexInicioSesion = document.getElementById('container');
const btnRegistrate = document.getElementById('registrate')
btnRegistrate.addEventListener('click', () => {
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
