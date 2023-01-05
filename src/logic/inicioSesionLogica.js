import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';
//import { provider } from './registroUsuarioLogica.js'

export const inicioSesionLogica = (contenedor) => {
    const correoInicio = contenedor.querySelector('#correoUsuarioInicio');
    // console.log(correoInicio);
    const contrasenaInicio = contenedor.querySelector('#contrasenaUsuarioInicio');
    // console.log(contrasenaInicio);
    const botoninicioSesion = contenedor.querySelector('#inicioSesionBtn');
    // console.log(botoninicioSesion);
    const mensajeErrorCorreo2 = contenedor.querySelector('#mensajeErrorCorreo2');
    const mensajeErrorContrasena2 = contenedor.querySelector('#mensajeErrorContrasena2');

    function UserException(message, code) {
        this.message = message;
        this.code = code;
    }
    // front-end validation
    const validateFields = () => {
        mensajeErrorCorreo2.classList.add('hide');
        mensajeErrorContrasena2.classList.add('hide');
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const errors = {};

        // Email validation
        if (!correoInicio.value) {
            errors.email = new UserException('Ingresa un correo', 'auth/empty-email');
        } else if (!correoInicio.value.match(emailRegex)) {
            errors.email = new UserException('Ingresa un correo válido. Por ejemplo: correo@dominio.ext', 'auth/invalid-email');
        }
        console.log(errors.email);

        // Password validation
        if (!contrasenaInicio.value) {
            errors.password = new UserException('Ingresa una contraseña', 'auth/empty-password');
        }    else if (contrasenaInicio.value.length < 6) {
            errors.password = new UserException('Las contraseñas tienen al menos 6 caracteres', 'auth/weak-password');
        }
        console.log(errors.password);

        return errors;
    };

    // back-end validation
    botoninicioSesion.addEventListener(('click'), async () => {
        const errors = validateFields();
        try {
            if (Object.keys(errors).length > 0) {
                throw new Error('hay errores');
            }
            // eslint-disable-next-line max-len
            const credenciales = await signInWithEmailAndPassword(auth, correoInicio.value, contrasenaInicio.value);
            console.log(credenciales);
            window.location.href = '/';
        } catch (error) {
            console.log(error.code);

            if (error?.code === 'auth/empty-email' || errors?.email?.code === 'auth/empty-email') {
                mensajeErrorCorreo2.innerHTML = 'Ingresa un correo';
                mensajeErrorCorreo2.classList.remove('hide');// show
            } else if (error?.code === 'auth/invalid-email' || errors?.email?.code === 'auth/invalid-email') {
                mensajeErrorCorreo2.innerHTML = 'Ingresa un correo válido. Por ejemplo: correo@dominio.ext';
                mensajeErrorCorreo2.classList.remove('hide');// show
            } else if (error?.code === 'auth/user-not-found' || errors?.email?.code === 'auth/user-not-found') {
                mensajeErrorCorreo2.innerHTML = 'El correo proporcionado no está registrado. Haz clic en Regístrate';
                mensajeErrorCorreo2.classList.remove('hide');// show
            } else {
                mensajeErrorCorreo2.classList.add('hide');// hide
            }

            if (error?.code === 'auth/empty-password' || errors?.password?.code === 'auth/empty-password') {
                mensajeErrorContrasena2.innerHTML = 'Ingresa una contraseña';
                mensajeErrorContrasena2.classList.remove('hide');// show
            } else if (error?.code === 'auth/wrong-password') {
                mensajeErrorContrasena2.innerHTML = 'La contraseña es incorrecta, inténtalo nuevamente';
                mensajeErrorContrasena2.classList.remove('hide');// show
            } else if (error?.code === 'auth/weak-password' || errors?.password?.code === 'auth/weak-password') {
                mensajeErrorContrasena2.innerHTML = 'Las contraseñas tienen al menos 6 caracteres';
                mensajeErrorContrasena2.classList.remove('hide');
            }  else {
                mensajeErrorContrasena2.classList.add('hide');// hide
            }
        }

    });

    // Inicio de Sesión Google
    const botonInicioGoogle = contenedor.querySelector('#inicioGmailBtn');


    botonInicioGoogle.addEventListener('click', async () => {
        
        const user = auth.currentUser;
        console.log(user)
        if (user) {
            window.location.href = '/';
        } else {
          alert ("usuario null")
        }
    })  
};
