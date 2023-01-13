export const home = () => {
    const homeDiv = document.createElement('div');
    const buttonRegister = document.createElement('li');
    const buttonLogin = document.createElement('li');

    buttonRegister.textContent = 'sign in';
    buttonLogin.textContent = 'sign up';

    homeDiv.appendChild(buttonRegister);
    homeDiv.appendChild(buttonLogin);

    const sectionDiv = document.createElement('section');
    sectionDiv.className = 'bienvenida';
    const bienvenidaH5 = document.createElement('h5');
    bienvenidaH5.className = 'welcome';
    const nameApp = document.createElement('h1');
    nameApp.className = 'nameAplication';

    bienvenidaH5.textContent = 'Welcome t💗'
    nameApp.textContent = "Dad's Power";
    sectionDiv.appendChild(bienvenidaH5);
    sectionDiv.appendChild(nameApp);

    homeDiv.appendChild(sectionDiv);

    const imagenInicio = document.createElement('img');
    imagenInicio.src = 'imagen/inicioApp.png';
    imagenInicio.className = 'imgInicio';

    homeDiv.appendChild(imagenInicio);

    return homeDiv;
}   
