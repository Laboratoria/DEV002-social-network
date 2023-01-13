export const home = () => {
   const homeDiv = document.createElement('div');

   const barraNavegacion = document.createElement('nav');
   barraNavegacion.className = 'navBarHome';
   homeDiv.appendChild(barraNavegacion);

   const listaBotones = document.createElement('ul');
   barraNavegacion.appendChild(listaBotones);

   const buttonRegister = document.createElement('li');
   buttonRegister.className = 'navLink';
   buttonRegister.textContent = 'Sign in';
   buttonRegister.id = 'botonRegistrar';

   const buttonLogin = document.createElement('li');
   buttonLogin.className = 'navLink';
   buttonLogin.textContent = 'Sign up';
   buttonLogin.id = 'botonLoguear';

   listaBotones.appendChild(buttonRegister);
   listaBotones.appendChild(buttonLogin);




   const sectionDiv = document.createElement('section');
   sectionDiv.className = 'bienvenida';
   const bienvenidaH5 = document.createElement('h5');
   bienvenidaH5.className = 'welcomeH5';
   const nameApp = document.createElement('h1');
   nameApp.className = 'nameAplication';

   bienvenidaH5.textContent = 'Welcome t💗';
   nameApp.textContent = "Dad's Power";
   sectionDiv.appendChild(bienvenidaH5);
   sectionDiv.appendChild(nameApp);

   homeDiv.appendChild(sectionDiv);

   const imagenInicio = document.createElement('img');
   imagenInicio.src = '/components/imagen/inicioApp.png';
   imagenInicio.className = 'imgInicio';

   homeDiv.appendChild(imagenInicio);


   return homeDiv;
}   