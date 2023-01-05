// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth, coleccionUsuarios2 } from '../firebase/configuracionFirebase.js';
import { addDoc, getDocs, doc, setDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { getCurrentUser } from '../firebase/configuracionFirebase.js';

export const registroUsuarioLogica = (contenedor) => {
    const nombre = contenedor.querySelector('#nombreUsuario');
    // const usuario = contenedor.querySelector('#idUsuario');
    const correoUsuario = contenedor.querySelector('#correoUsuario');
    const contrasenaUsuario = contenedor.querySelector('#contrasenaUsuario');
    const confirmacionContrasena = contenedor.querySelector('#confirmacionContrasena');
    const mensajeErrorNombre = contenedor.querySelector('#mensajeErrorNombre');
    // const mensajeErrorUsuario = contenedor.querySelector('#mensajeErrorUsuario');
    const mensajeErrorCorreo = contenedor.querySelector('#mensajeErrorCorreo');
    const mensajeErrorContrasena = contenedor.querySelector('#mensajeErrorContrasena');
    const mensajeErrorConfirmacion = contenedor.querySelector('#mensajeErrorConfirmacion');
    const registroCorreo = contenedor.querySelector('#registroCorreoBoton');

    const number = [];
    // console.log(number)
    getDocs(coleccionUsuarios2)
        .then((snapshot) => {
            const lista = [];
            snapshot.docs.forEach((doc) => {
                lista.push({ ...doc.data(), id: doc.id });
            });
            number.push(lista.length);
            // console.log(lista[0].id);
        });

    function UserException(message, code) {
        this.message = message;
        this.code = code;
    }

    const validateFields = () => {
        // mensajeErrorUsuario.classList.add('hide');
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

    registroCorreo.addEventListener(('click'), async () => {
        const errors = validateFields();
        try {
            if (Object.keys(errors).length > 0) {
                throw new Error('hay errores');
            }

            const credenciales = await createUserWithEmailAndPassword(auth, correoUsuario.value, contrasenaUsuario.value);
            console.log(credenciales);

            const usuarios = getCurrentUser();

            const numeroFinal = (number[0]);
            const suma = numeroFinal + 1;
            const cadena = suma.toString();
            window.localStorage.setItem('cadena', cadena);

            const usuariosDocumento = await setDoc(doc(getFirestore(), 'usuarios', cadena), {
                email: correoUsuario.value,
                name: nombre.value,
                uid: auth.currentUser.uid,
            });

            window.location.href = 'formulario-registro';

        } catch (error) {
            console.log(error.code, errors);
            if (error?.code === 'auth/empty-name' || errors?.name?.code === 'auth/empty-name') {
                mensajeErrorNombre.innerHTML = 'Ingresa tu nombre';
                mensajeErrorNombre.classList.remove('hide');// show
            } else {
                mensajeErrorNombre.classList.add('hide');// hide
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
                mensajeErrorContrasena.classList.remove('hide');// show
            } else {
                mensajeErrorContrasena.classList.add('hide');// hide
            }

            if (errors?.passwordConfirmation?.code === 'auth/empty-confirmation-password') {
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else if (errors?.passwordConfirmation?.code === 'auth/weak-confirmation-password' || errors?.password?.code === 'auth/weak-confirmation-password') {
                mensajeErrorConfirmacion.innerHTML = 'Contraseña débil, ingresa al menos 6 caracteres';
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else if (errors?.passwordConfirmation?.code === 'auth/different-password' || errors?.password?.code === 'auth/different-password') {
                mensajeErrorConfirmacion.innerHTML = 'Las contraseñas no coinciden';
                mensajeErrorConfirmacion.classList.remove('hide');// show
            } else {
                mensajeErrorConfirmacion.classList.add('hide');// hide
            }
        }
    });

    // Registro Google
    const botonRegistroGoogle = contenedor.querySelector('#registroGmailBtn');

    botonRegistroGoogle.addEventListener('click', async () => {

        const provider = new GoogleAuthProvider();

        try {
            const credentials = await signInWithPopup(auth, provider);
            console.log(credentials);
            window.location.href = 'formulario-registro';
            /*
                user.providerData.forEach((profile) => {
                    console.log("Sign-in provider: " + profile.providerId);
                    console.log("  Provider-specific UID: " + profile.uid);
                    console.log("  Name: " + profile.displayName);
                    console.log("  Email: " + profile.email);
                    console.log("  Photo URL: " + profile.photoURL);
                })*/
        } catch (error) {
            console.log(error);
        }
    });

};

