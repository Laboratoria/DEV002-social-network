// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth, coleccionUsuarios, coleccionNombresUsuario } from '../firebase/configuracionFirebase.js';
import { addDoc, getDocs, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

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

    //Intenté usar filter() para guardar el usuario en un array y usarlo fuera de la promesa pero no pude :,D 
    // const filter = (array, input) => array.filter(e => e.username.includes(input.toLowerCase()));
    //
    // usuario.addEventListener("keyup", () => {
    //     // console.log(usuario.value)
    //     getDocs(coleccionNombresUsuario)
    //         // Nota Pris: Any time you read data from the Database, you receive the data as a DataSnapshot
    //         .then((snapshot) => {
    //             const listaUsuarios = [];
    //             snapshot.docs.forEach((documento) => {
    //                 listaUsuarios.push({ ...documento.data() });
    //             });
    //             const usuarioEncontrado = listaUsuarios.some(el => el.username === usuario.value);
    //             // console.log(usuarioEncontrado)
    //             if (usuarioEncontrado) {
    //                 mensajeErrorUsuario.innerHTML = 'Usuario inválido, ya está registrado';
    //                 mensajeErrorUsuario.classList.remove('hide');
    //             }
    //             else if (!usuarioEncontrado) {
    //                 mensajeErrorUsuario.innerHTML = 'Ingresa tu usuario';
    //                 mensajeErrorUsuario.classList.add('hide');
    //             }
    //         });
    // });

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

        // Username validation
        // if (!usuario.value) {
        //     errors.username = new UserException('Ingresa el nombre de usuario', 'auth/empty-username');
        // }
        // else if (mensajeErrorUsuario.innerHTML === 'Usuario inválido, ya está registrado') {
        //     errors.username = new UserException('Usuario inválido, ya está registrado', 'auth/invalid-username');
        // }

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
            //Cambio
            // const guardarDisplayName = (valorUsuario) => updateProfile(auth.currentUser, {
            //     displayName: valorUsuario,
            // });

            // const displayUsuario = guardarDisplayName(usuario.value);

            // const querySnapshot = await getDocs(
            //     collection(coleccionUsuarios, firebase.auth().currentUser.uid)
            // );

            // const usuarios2 = await setDoc(doc(db, "users", nombre.value), {
            //     name: "Los Angeles",
            //     state: "CA",
            //     country: "USA"
            //   });

            // const guardar = (coleccion) => updateProfile(auth.currentUser, ()=>{
            //     return doc(coleccion).id
            // });

            // const newGroupRef = doc(coleccionUsuarios);
            // Generate "locally" a new document for the given collection reference

            const usuarios = await addDoc(coleccionUsuarios, {
                email: correoUsuario.value,
                name: nombre.value,
                uid: auth.currentUser.uid,
                iddoc: doc(coleccionUsuarios).id
                // id_doc: doc(coleccionUsuarios).id
                // id: auth.currentUser.id
                // id: auth.currentUser.uid
                // username: usuario.value,
            });

            // const currentUser = {};

            // const getCurrentUser = () => {
            //     onAuthStateChanged(auth, (user) => {
            //         if (user) {
            //             // currentUser.displayName = user.displayName;
            //             currentUser.email = user.email;
            //             currentUser.uid = user.uid;
            //             currentUser.photoURL = user.photoURL;
            //         }
            //     });
            // };

            // const usuarios = await setDoc(coleccionUsuarios, {

            // })

            // // Set the doc, using the id property of the DocumentReference
            // await setDoc(newDocRef, {
            //     name: project,
            //     uid: currentUser,
            //     projectId: newDocRef.id
            // }
            // );

            // console.log(usuarios[0].id)
            // const docRef = await doc(coleccionUsuarios); 
            // const documentUuid = docRef.id;

            // const otro = await setDoc(coleccionUsuarios, { 
            //     iddoc: doc(coleccionUsuarios).id,
            // });

            // const nuevo = await newGroupRef.setDoc(usuarios);

            // getDocs(coleccionUsuarios)
            //     .then((snapshot) => {
            //         const lista = [];
            //         snapshot.docs.forEach((doc) => {
            //             lista.push({ ...doc.data(), id: doc.id });
            //         });
            //         console.log(lista);
            //     });

            // const usernames = await addDoc(coleccionNombresUsuario, {
            //     username: usuario.value,
            // })

            window.location.href = 'formulario-registro';

        } catch (error) {
            console.log(error.code, errors);
            if (error?.code === 'auth/empty-name' || errors?.name?.code === 'auth/empty-name') {
                mensajeErrorNombre.innerHTML = 'Ingresa tu nombre';
                mensajeErrorNombre.classList.remove('hide');
            } else {
                mensajeErrorNombre.classList.add('hide');
            }

            //Username
            //-------------------------------------------------------------------------------
            // if (!usuario.value) {
            //     mensajeErrorUsuario.classList.remove('hide');
            // } else {
            //     mensajeErrorUsuario.classList.add('hide');
            // }
            //-------------------------------------------------------------------------------
            // if (errors?.username?.code === 'auth/empty-username') {
            //     mensajeErrorUsuario.innerHTML = 'Ingresa tu nombre de usuario';
            //     mensajeErrorUsuario.classList.remove('hide');// show
            // } else if (errors?.username?.code === 'auth/invalid-username') {
            //     //'Usuario inválido, ya está registrado'
            //     mensajeErrorUsuario.innerHTML = 'Usuario inválido, ya está registrado';
            //     mensajeErrorUsuario.classList.remove('hide');// show
            // } else {
            //     mensajeErrorUsuario.classList.add('hide');
            // }

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
            } else if (errors?.passwordConfirmation?.code === 'auth/weak-confirmation-password' || errors?.password?.code === 'auth/weak-confirmation-password') {
                mensajeErrorConfirmacion.innerHTML = 'Contraseña débil, ingresa al menos 6 caracteres';
                mensajeErrorConfirmacion.classList.remove('hide');
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

