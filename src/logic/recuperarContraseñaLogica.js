export const recuperarContraseñaLogica = (contenedor) => {
    const recuperarContrasenaBtn = contenedor.querySelector('#recuperarContrasenaBtn');
    const inputContainer = contenedor.querySelector('.contenidoInputs');
    const messageContainer = contenedor.querySelector('.contenidoMensaje');
    const iniciarSesionBtn = contenedor.querySelector('#volverIniciarSesion');

    recuperarContrasenaBtn.addEventListener('click', () => {
        inputContainer.classList.add('hide');
        messageContainer.classList.remove('hide');

        console.log('hola');
    });

    iniciarSesionBtn.addEventListener('click', () => {
        window.location.href = 'inicio-sesion';
    });
};
