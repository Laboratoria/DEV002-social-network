// eslint-disable-next-line import/no-unresolved
import { createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth, coleccionNombresUsuario } from '../firebase/configuracionFirebase.js';
import { addDoc, getDocs, doc, setDoc, getFirestore, updateDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

export const formularioRegistroMascotaLogica = (contenedor) => {
    const nombre = contenedor.querySelector('#nombreMascota');
    const usuario = contenedor.querySelector('#idUsuario');
    const edad = contenedor.querySelector('#edadMascota');
    const ubicacion = contenedor.querySelector('#dogLocation');//En Firestore existe la opcion de colocar un GeoPoint
    const raza = contenedor.querySelector('#dogBreed');
    const tallaRadios = document.getElementsByName("dogSize");
    const sexoRadios = document.getElementsByName("dogSex");
    const mensajeErrorNombre = contenedor.querySelector('#mensajeErrorNombre');
    const mensajeErrorUsuario = contenedor.querySelector('#mensajeErrorUsuario');
    const mensajeErrorEdad = contenedor.querySelector('#mensajeErrorEdad');
    const mensajeErrorSexo = contenedor.querySelector('#mensajeErrorSexo');
    const mensajeErrorUbicacion = contenedor.querySelector('#mensajeErrorUbicacion');
    const mensajeErrorRaza = contenedor.querySelector('#mensajeErrorRaza');
    const mensajeErrorTalla = contenedor.querySelector('#mensajeErrorTalla');
    const saveUserData = contenedor.querySelector('#guardarDatos');

    // usuario.addEventListener("keyup", () => {
    // console.log(usuario.value)
    // });

    function UserException(message, code) {
        this.message = message;
        this.code = code;
    }

    const validateFields = () => {
        mensajeErrorNombre.classList.add('hide');
        mensajeErrorUsuario.classList.add('hide');
        mensajeErrorEdad.classList.add('hide');
        mensajeErrorSexo.classList.add('hide');
        mensajeErrorUbicacion.classList.add('hide');
        mensajeErrorRaza.classList.add('hide');
        //Talla
        mensajeErrorTalla.classList.add('hide');

        function check(radios) {
            for (var i = 0, len = radios.length; i < len; i++) {
                if (radios[i].checked) {
                    // console.log('los check fueron elegidos')
                    return true;
                };
            };
            // console.log('los check no han sido elegidos')
            return false;
        };

        const errors = {};

        // Name validation
        if (!nombre.value) {
            errors.name = new UserException('Ingresa el nombre de tu mascota', 'auth/empty-name');
        }

        // Username validation
        if (!usuario.value) {
            errors.username = new UserException('Ingresa el nombre de usuario', 'auth/empty-username');
        }
        else if (mensajeErrorUsuario.innerHTML === 'Usuario inválido, ya está registrado') {
            errors.username = new UserException('Usuario inválido, ya está registrado', 'auth/invalid-username');
        }

        // Age validation
        if (!edad.value) {
            errors.age = new UserException('Ingresa la edad', 'auth/empty-age');
        } else if (!(Number.isInteger(parseInt(edad.value)))) {
            errors.age = new UserException('Ingresa un número entero', 'auth/invalid-age');
        }

        // Sex Validation
        if (check(sexoRadios) === false) {
            errors.sex = new UserException('Elige el sexo', 'auth/empty-sex');
        }

        // Location validation
        if (!ubicacion.value) {
            errors.location = new UserException('Ingresa tu ubicación', 'auth/empty-location');
        } else if (typeof ubicacion.value != 'string') {
            errors.location = new UserException('Ingresa solamente palabras', 'auth/invalid-location');
        }

        // Breed validation
        if (!raza.value) {
            errors.breed = new UserException('Ingresa la raza de tu mascota', 'auth/empty-breed');
        } else if (typeof raza.value != 'string') {
            errors.breed = new UserException('Ingresa solamente palabras', 'auth/invalid-breed');
        }

        // Size Validation
        if (check(tallaRadios) === false) {
            errors.size = new UserException('Elige el tamaño', 'auth/empty-size');
        }

        return errors;
    };


    saveUserData.addEventListener('click', async () => {
        const errors = validateFields();
        try {
            if (Object.keys(errors).length > 0) {
                throw new Error('hay errores');
            }
            
            getDocs(coleccionNombresUsuario)
            // Nota Pris: Any time you read data from the Database, you receive the data as a DataSnapshot
            .then((snapshot) => {
                const listaUsuarios = [];
                snapshot.docs.forEach((documento) => {
                    listaUsuarios.push({ ...documento.data() });
                });
                const usuarioEncontrado = listaUsuarios.some(elemento => elemento.username === usuario.value);
                // console.log(usuarioEncontrado)
                if (usuarioEncontrado) {
                    console.log("Usuario encontrado")
                    mensajeErrorUsuario.innerHTML = 'Usuario inválido, ya está registrado';
                    mensajeErrorUsuario.classList.remove('hide');
                }
                else if (!usuarioEncontrado) {
                    console.log("Usuario no encontrado")
                    mensajeErrorUsuario.innerHTML = 'Ingresa tu usuario';
                    mensajeErrorUsuario.classList.add('hide');
                }
            });
            //---------------------------------------------------------------------------------------
            // const guardarDisplayName = (valorUsuario) => updateProfile(auth.currentUser, {
            //     displayName: valorUsuario,
            // });

            // const displayUsuario = guardarDisplayName(usuario.value)
            //---------------------------------------------------------------------------------------
            const cadena = window.localStorage.getItem('cadena');

            //PARA ACTUALIZAR DOC ---------------------------------------------------------------------
            const documentoReferencia = doc(getFirestore(), "usuarios", cadena);
            const usuarios = await updateDoc(documentoReferencia, {
                petName: nombre.value,
                username: usuario.value,
                age: edad.value,
                location: ubicacion.value,
                breed: raza.value,
            });

            //PARA SOBREESCRIBIR EN UN DOC''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
            // const usuarios2 = await setDoc(doc(getFirestore(), "users", "mexnY2FprZw3ux7TJtVL"), {
            //     fieldPrueba: "lalala"
            //   });

            const usernames = await addDoc(coleccionNombresUsuario, {
                username: usuario.value,
            })

            window.location.href = '/';
            // window.location.href = 'formulario-registro';

        } catch (error) {
            console.log(error.code, errors);
            if (error?.code === 'auth/empty-name' || errors?.name?.code === 'auth/empty-name') {
                mensajeErrorNombre.innerHTML = 'Ingresa el nombre de tu mascota';
                mensajeErrorNombre.classList.remove('hide');
            } else {
                mensajeErrorNombre.classList.add('hide');
            }

            if (errors?.username?.code === 'auth/empty-username') {
                mensajeErrorUsuario.innerHTML = 'Ingresa el nombre de usuario';
                mensajeErrorUsuario.classList.remove('hide');// show
            } else if (errors?.username?.code === 'auth/invalid-username') {
                //'Usuario inválido, ya está registrado'
                mensajeErrorUsuario.innerHTML = 'Usuario inválido, ya está registrado';
                mensajeErrorUsuario.classList.remove('hide');// show
            } else {
                mensajeErrorUsuario.classList.add('hide');
            }

            if (errors?.age?.code === 'auth/empty-age') {
                mensajeErrorEdad.innerHTML = 'Ingresa la edad';
                mensajeErrorEdad.classList.remove('hide');// show
            } else if (errors?.age?.code === 'auth/invalid-age') {
                mensajeErrorEdad.innerHTML = 'Ingresa una edad válida. Por ejemplo: 5';
                mensajeErrorEdad.classList.remove('hide');// show
            } else {
                mensajeErrorEdad.classList.add('hide');// hide
            }

            if (errors?.sex?.code === 'auth/empty-sex') {
                mensajeErrorSexo.innerHTML = 'Elige el sexo';
                mensajeErrorSexo.classList.remove('hide');// show
            } else {
                mensajeErrorSexo.classList.add('hide');// hide
            }

            if (errors?.location?.code === 'auth/empty-location') {
                mensajeErrorUbicacion.innerHTML = 'Ingresa tu ubicación';
                mensajeErrorUbicacion.classList.remove('hide');// show
            } else if (errors?.location?.code === 'auth/invalid-location') {
                mensajeErrorUbicacion.innerHTML = 'Ingresa una ubicación válida. Por ejemplo: Sao Paulo, Brasil';
                mensajeErrorUbicacion.classList.remove('hide');// show
            } else {
                mensajeErrorUbicacion.classList.add('hide');// hide
            }

            if (errors?.breed?.code === 'auth/empty-breed') {
                mensajeErrorRaza.innerHTML = 'Ingresa la raza';
                mensajeErrorRaza.classList.remove('hide');// show
            } else if (errors?.breed?.code === 'auth/invalid-breed') {
                mensajeErrorRaza.innerHTML = 'Ingresa una raza válida. Por ejemplo: Golden Retriever';
                mensajeErrorRaza.classList.remove('hide');// show
            } else {
                mensajeErrorRaza.classList.add('hide');// hide
            }

            if (errors?.size?.code === 'auth/empty-size') {
                mensajeErrorTalla.innerHTML = 'Elige el tamaño';
                mensajeErrorTalla.classList.remove('hide');// show
            } else {
                mensajeErrorTalla.classList.add('hide');// hide
            }

        }
    });
};
