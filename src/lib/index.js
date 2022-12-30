import "../js/router.js";
import "../js/routes.js";
import { registrar } from '../app/register.js';


export const loadHome = () => {
  const ROUTER = new Router(PATHS);
  ROUTER.load('home');
  const homeSignInBtn = document.getElementById("navLinkCreateAccount");
  homeSignInBtn.addEventListener("click", loadRegister);
  const loginSection = document.getElementById("navLinkLogin")
  loginSection.addEventListener("click", loadLogin);
};

export const loadRegister = () => {
  const ROUTER = new Router(PATHS);
  ROUTER.load('signup');
  const registerForm = document.getElementById("registerDivBtn")
  registerForm.addEventListener("click", registrar);
};

export const loadLogin = () => {
  const ROUTER = new Router(PATHS);
  ROUTER.load('login');
  // darle función a botón facebook y correo (HU2)
};

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
