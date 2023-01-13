export const home = () => {
   const homeDiv = document.createElement('div');
   const buttonRegister = document.createElement('li');
   const buttonLogin = document.createElement('li'); 

buttonRegister.textContent = 'sign in';
buttonLogin.textContent = 'sign up';

homeDiv.appendChild(buttonRegister);
homeDiv.appendChild(buttonLogin);
return  homeDiv;
}   