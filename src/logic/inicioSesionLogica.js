import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const inicioSesionLogica = (contenedor) => {
    const correoInicio = contenedor.querySelector('#correoUsuarioInicio');
    console.log(correoInicio);
    const contrasenaInicio = contenedor.querySelector('#contrasenaUsuarioInicio');
    console.log(contrasenaInicio);
    const botoninicioSesion = contenedor.querySelector('#inicioSesionBtn');
    console.log(botoninicioSesion);
    const mensajeErrorCorreo2 = contenedor.querySelector('#mensajeErrorCorreo2');
    const mensajeErrorContrasena2 = contenedor.querySelector('#mensajeErrorContrasena2');

    // validar front end
    // 'auth/empty-name'
    // 'auth/internal-error'

    // validacion backend
    botoninicioSesion.addEventListener(('click'), async (element) => {
        try {
            // eslint-disable-next-line max-len
            const credenciales = await signInWithEmailAndPassword(auth, correoInicio.value, contrasenaInicio.value);
            console.log(credenciales);
            // window.location.href = '/'; falta crear Home.js
        } catch (error) {
            console.log(error.code);
/*
            if (error.code === 'auth/invalid-email') {
                mensajeErrorCorreo2.innerHTML = 'Ingresa un correo válido. Por ejemplo: correo@dominio.ext';
                mensajeErrorCorreo2.classList.remove('hide');// show
            } else {
                mensajeErrorCorreo2.classList.add('hide');
            }

            if (error.code === 'auth/user-not-found') {
                mensajeErrorCorreo2.innerHTML = 'El correo no se encuentra registrado.';
                mensajeErrorCorreo2.classList.remove('hide');// show
            } else {
                //mensajeErrorCorreo2.classList.add('hide');
            }

            if (error.code === 'auth/wrong-password') {
                mensajeErrorContrasena2.classList.remove('hide');// show
                mensajeErrorContrasena2.innerHTML = 'La contraseña es incorrecta';
            } else {
                //mensajeErrorContrasena2.classList.add('hide');
            }

            if (error.code === 'auth/internal-error') {
                mensajeErrorContrasena2.classList.remove('hide');// show
            } else {
                mensajeErrorContrasena2.classList.add('hide');
            }*/ // corregir errores
        }
    });
};
