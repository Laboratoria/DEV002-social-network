import { auth, } from '../firebase/configuracionFirebase.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';


export const recuperarContraseñaLogica = (contenedor) => {
    const recuperarContrasenaBtn = contenedor.querySelector('#recuperarContrasenaBtn');
    const inputContainer = contenedor.querySelector('.contenidoInputs');
    const messageContainer = contenedor.querySelector('.contenidoMensaje');
    const iniciarSesionBtn = contenedor.querySelector('#volverIniciarSesion');
    const correoRecuperacionInput = contenedor.querySelector('#correoRecuperacion');
    const mensajeErrorMail = contenedor.querySelector('#mensajeErrorMail');

    function UserException(message, code) {
        this.message = message;
        this.code = code;
    }

    const validateFields = () => {
        mensajeErrorMail.classList.add('hide');
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const errors = {};

        // Email validation
        if (!correoRecuperacionInput.value) {
            errors.email = new UserException('Ingresa un correo', 'auth/empty-email');
        } else if (!correoRecuperacionInput.value.match(emailRegex)) {
            errors.email = new UserException('Ingresa un correo válido. Por ejemplo: correo@dominio.ext', 'auth/invalid-email');
        }
        console.log(errors.email);
        return errors;
        console.log(errors)
    };

    recuperarContrasenaBtn.addEventListener('click', async () => {
        const errors = validateFields();
        try {
            if (Object.keys(errors).length > 0) {
                throw new Error('hay errores');
            }
            await sendPasswordResetEmail(auth, correoRecuperacionInput.value)
            inputContainer.classList.add('hide');
            messageContainer.classList.remove('hide');
        } catch (error) {
            if (error?.code === 'auth/empty-email' || errors?.email?.code === 'auth/empty-email') {
                mensajeErrorMail.innerHTML = 'Ingresa un correo';
                mensajeErrorMail.classList.remove('hide');// show
            } else if (error?.code === 'auth/invalid-email' || errors?.email?.code === 'auth/invalid-email') {
                mensajeErrorMail.innerHTML = 'Ingresa un correo válido. Por ejemplo: correo@dominio.ext';
                mensajeErrorMail.classList.remove('hide');// show
            } else if (error?.code === 'auth/user-not-found' || errors?.email?.code === 'auth/user-not-found') {
                mensajeErrorMail.innerHTML = 'El correo proporcionado es incorrecto';
                mensajeErrorMail.classList.remove('hide');// show
            } else {
                mensajeErrorMail.classList.add('hide');// hide
            }
        }
    });

    iniciarSesionBtn.addEventListener('click', () => {
        window.location.href = 'inicio-sesion';
    });
};
