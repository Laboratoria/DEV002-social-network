// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth, collectionUsers, collectionUsernames } from '../firebase/configuracionFirebase.js';
import { addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
//Hacer los test de DOM de los innerHTML
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
    const registroCorreo = contenedor.querySelector('#registroCorreoBoton');

    function UserException(message, code) {
        this.message = message;
        this.code = code;
    }

    // const user = {};
    const validateFields = () => {
        mensajeErrorUsuario.classList.add('hide');
        mensajeErrorCorreo.classList.add('hide');
        mensajeErrorContrasena.classList.add('hide');
        mensajeErrorConfirmacion.classList.add('hide');
        mensajeErrorNombre.classList.add('hide');
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const errors = {};

        // Name validation
        if (!nombre.value) {
            errors.name = new UserException('Ingresa tu nombre', 'auth/empty-name');
        }

        // Email validation
        if (!correoUsuario.value) {
            errors.email = new UserException('Ingresa un correo', 'auth/empty-email');
        } else if (!correoUsuario.value.match(emailRegex)) {
            errors.email = new UserException('Ingresa un correo válido. Por ejemplo: correo@dominio.ext', 'auth/invalid-email');
        }

        // Password validation
        if (!contrasenaUsuario.value) {
            errors.password = new UserException('Ingresa una contraseña', 'auth/empty-password');
        } else if (contrasenaUsuario.value.length < 6) {
            errors.password = new UserException('Contraseña débil, ingresa al menos 6 caracteres', 'auth/weak-password');
        }

        // Password confirmation validation
        if (!confirmacionContrasena.value) {
            errors.passwordConfirmation = new UserException('Ingresa una contraseña', 'auth/empty-confirmation-password');
        } else if (confirmacionContrasena.value.length < 6) {
            errors.passwordConfirmation = new UserException('Contraseña débil, ingresa al menos 6 caracteres', 'auth/weak-confirmation-password');
        } else if (contrasenaUsuario.value !== confirmacionContrasena.value) {
            errors.passwordConfirmation = new UserException('Las contraseñas no coinciden', 'auth/different-password')
        }

        return errors;
    };

    registroCorreo.addEventListener(('click'), async (element) => {
        const errors = validateFields();
        try {
            if (Object.keys(errors).length > 0) {
                throw new Error('hay errores');
            }

            const credenciales = await createUserWithEmailAndPassword(auth, correoUsuario.value, contrasenaUsuario.value);
            console.log(credenciales);
            //Cambio
            const usuarios = await addDoc(collectionUsers, {
                email: correoUsuario.value,
                name: nombre.value
            })

            // const cambio = await onAuthStateChanged(auth, (user) => {
            //     user.uid = usuario.value;
            // });

            const usernames = await addDoc(collectionUsernames, {
                username: usuario.value,
            })
            // const usernames = await addDoc(collectionUsernames, () => {
            //     onAuthStateChanged(auth, (user) => {
            //         if (user) {
            //             usuario.value = user.uid;
            //         }
            //     });
            // });
            window.location.href = 'formulario-registro';

        } catch (error) {
            console.log(error.code, errors);
            if (error?.code === 'auth/empty-name' || errors?.name?.code === 'auth/empty-name') {
                mensajeErrorNombre.innerHTML = 'Ingresa tu nombre';
                mensajeErrorNombre.classList.remove('hide');
            } else {
                mensajeErrorNombre.classList.add('hide');
            }

            if (!usuario.value) {
                mensajeErrorUsuario.classList.remove('hide');
            } else {
                mensajeErrorUsuario.classList.add('hide');
            }

            if (error?.code === 'auth/empty-email' || errors?.email?.code === 'auth/empty-email') {
                mensajeErrorCorreo.innerHTML = 'Ingresa un correo';
                mensajeErrorCorreo.classList.remove('hide');// show
            } else if (error?.code === 'auth/invalid-email' || errors?.email?.code === 'auth/invalid-email') {
                mensajeErrorCorreo.innerHTML = 'Ingresa un correo válido. Por ejemplo: correo@dominio.ext';
                mensajeErrorCorreo.classList.remove('hide');// show
            } else if (correoUsuario.value && error?.code === 'auth/email-already-in-use') {
                mensajeErrorCorreo.innerHTML = 'Este correo ya está en uso, ingresa uno válido';
                mensajeErrorCorreo.classList.remove('hide');// show
            } else {
                mensajeErrorCorreo.classList.add('hide');// hide
            }

            if (error?.code === 'auth/empty-password' || errors?.password?.code === 'auth/empty-password') {
                mensajeErrorContrasena.innerHTML = 'Ingresa una contraseña';
                mensajeErrorContrasena.classList.remove('hide');// show
            } else if (error?.code === 'auth/weak-password' || errors?.password?.code === 'auth/weak-password') {
                mensajeErrorContrasena.innerHTML = 'Contraseña débil, ingresa al menos 6 caracteres';
                mensajeErrorContrasena.classList.remove('hide');
            } else {
                mensajeErrorContrasena.classList.add('hide');// hide
            }

            if (errors?.passwordConfirmation?.code === 'auth/empty-confirmation-password') {
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else if (errors?.passwordConfirmation?.code === 'auth/weak-confirmation-password') {
                mensajeErrorConfirmacion.innerHTML = 'Contraseña débil, ingresa al menos 6 caracteres';
                mensajeErrorConfirmacion.classList.remove('hide');
            } else if (errors?.passwordConfirmation?.code === 'auth/different-password') {
                mensajeErrorConfirmacion.innerHTML = 'Las contraseñas no coinciden';
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else {
                mensajeErrorConfirmacion.classList.add('hide');// hide
            }
        }
    });
};
