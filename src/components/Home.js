export const home = () => {
const homeDiv = document.createElement('div');
const barraNavegacion= document.createElement('nav')
barraNavegacion.className = 'navBarHome';
homeDiv.appendChild(barraNavegacion);

const listaBotonoes =document.createElement('ul')
barraNavegacion.appendChild(listaBotonoes);

const buttonRegister = document.createElement('li');
const buttonLogin = document.createElement('li'); 

buttonRegister.textContent = 'sign in';
buttonLogin.textContent = 'sign up';

listaBotonoes.appendChild(buttonRegister);
listaBotonoes.appendChild(buttonLogin);
 
const sectionDiv = document.createElement('section');
sectionDiv.className = 'bienvenida';
const Bienvenidah5 = document.createElement('h5');
Bienvenidah5.className = 'WelcomeH5'
const nameApp = document.createElement('h1');
nameApp.className = 'nameAplication'

Bienvenidah5.textContent = 'welcolme t💗'
nameApp.textContent = "Dad's Power"

sectionDiv.appendChild(Bienvenidah5);
sectionDiv.appendChild(nameApp);

homeDiv.appendChild(sectionDiv);

const imagenInicio = document.createElement('img')
imagenInicio.src = 'imagn/inicioApp.png';
imagenInicio.className= 'imgInicio'

homeDiv.appendChild(imagenInicio);

return  homeDiv;
}   