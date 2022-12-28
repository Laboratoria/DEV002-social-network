// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const registroUsuarioLogica = (contenedor) => {
    const nombre = contenedor.querySelector('#nombreUsuario');
    const usuario = contenedor.querySelector('#idUsuario');
    const correoUsuario = contenedor.querySelector('#correoUsuario');
    const contrasenaUsuario = contenedor.querySelector('#contrasenaUsuario');
    const confirmacionContrasena = contenedor.querySelector('#confirmacionContrasena');
    const mensajeErrorNombre = contenedor.querySelector('#mensajeErrorNombre');
    const mensajeErrorUsuario = contenedor.querySelector('#mensajeErrorUsuario');
    const mensajeErrorCorreo = contenedor.querySelector('#mensajeErrorCorreo');
    const mensajeErrorContrasena = contenedor.querySelector('#mensajeErrorContrasena');
    const mensajeErrorConfirmacion = contenedor.querySelector('#mensajeErrorConfirmacion');
    const botonRegistro = contenedor.querySelector('#registroCorreoBtn');

    const user = {};

    botonRegistro.addEventListener(('click'), async (element) => {
        element.preventDefault();
        // eslint-disable-next-line max-len
        try {
            // eslint-disable-next-line max-len
            const credenciales = await createUserWithEmailAndPassword(auth, correoUsuario.value, contrasenaUsuario.value);
            console.log(credenciales);
        } catch (error) {
            if (!nombre.value) {
                mensajeErrorNombre.classList.remove('hide');
            } else {
                mensajeErrorNombre.classList.add('hide');
            }

            if (!usuario.value) {
                mensajeErrorUsuario.classList.remove('hide');
                // } else if (usuario.value && USUARIO YA REGISTRADO) {
            } else {
                mensajeErrorUsuario.classList.add('hide');
            }

            if (!correoUsuario.value) {
                mensajeErrorCorreo.classList.remove('hide');// show
            } else if (correoUsuario.value && error.code === 'auth/invalid-email') {
                mensajeErrorCorreo.innerHTML = 'Ingresa un correo válido. Por ejemplo: correo@dominio.ext';
                mensajeErrorCorreo.classList.remove('hide');// show
            } else if (correoUsuario.value && error.code === 'auth/email-already-in-use') {
                mensajeErrorCorreo.innerHTML = 'Este correo ya está en uso, ingresa uno válido';
                mensajeErrorCorreo.classList.remove('hide');// show
            } else {
                mensajeErrorCorreo.classList.add('hide');// hide
            }

            if (!contrasenaUsuario.value) {
                mensajeErrorContrasena.classList.remove('hide');// show
            } else if (contrasenaUsuario.value && error.code === 'auth/weak-password') {
                mensajeErrorContrasena.innerHTML = 'Contraseña débil, ingresa al menos 6 caracteres';
                mensajeErrorContrasena.classList.remove('hide');
            } else {
                mensajeErrorContrasena.classList.add('hide');// hide
            }

            if (!confirmacionContrasena.value) {
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else if (contrasenaUsuario.value !== confirmacionContrasena.value) {
                mensajeErrorConfirmacion.innerHTML = 'Las contraseñas no coinciden';
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else {
                mensajeErrorConfirmacion.classList.add('hide');// hide
            }
        }
    });
};
