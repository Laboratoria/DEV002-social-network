/* eslint-disable no-undef */
import { registrar } from '../app/register.js';
import { AuthAccountFacebook } from '../app/facebookrg.js';
const ROUTER = new Router(PATHS);

export const loadRegister = () => {
  ROUTER.load('signup');
  const registerForm = document.getElementById('registerDivBtn');
  registerForm.addEventListener('click', registrar);
};

export const loadLogin = () => {
  ROUTER.load('login');
  // const facebookBTN = document.getElementById('facebookBtn');
  // facebookBTN.addEventListener('click', AuthAccountFacebook());
};

export const loadHome = () => {
  ROUTER.load('home');
  const homeSignInBtn = document.getElementById('navLinkCreateAccount');
  homeSignInBtn.addEventListener('click', loadRegister);
  const loginSection = document.getElementById('navLinkLogin');
  loginSection.addEventListener('click', loadLogin);
};
