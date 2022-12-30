import "../js/router.js";
import "../js/routes.js";
import { registrar } from '../app/register.js';


export const loadHome = () => {
  const ROUTER = new Router(PATHS);
  ROUTER.load('home');
  const homeSignInBtn = document.getElementById("navLinkCreateAccount");
  homeSignInBtn.addEventListener("click", loadRegister);
};

export const loadRegister = () => {
  const ROUTER = new Router(PATHS);
  ROUTER.load('register');
  const registerForm = document.getElementById("registerDivBtn")
  registerDivBtn.addEventListener("click", registrar);
};

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
