import { formularioRegistroMascotaLogica } from '../logic/formularioRegistroMascotaLogica.js';

const FormularioRegistroMascota = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('formularioMascota');
    const view = `
        <figure class='logo'>
            <img src="./assets/tindog_logo_r.png" alt="logo de tindog">
        </figure>
        <div class='fotoPerfil'>
            <figure>
                <img src="./assets/dog-iconuser.png" alt="imagen de usuario"/>
            </figure>
            <button>+</button>
        </div>
        <form>
            <div>
                <label>Nombre de tu mascota</label>
                <input type="text" id="nombreMascota" placeholder="Sulivan">
                <p id='mensajeErrorNombre' class='hide'>Ingresa el nombre de tu mascota</p>
            </div>
            <div>
                <label>Usuario</label>
                <input id="idUsuario" type="text" placeholder="elsully">
                <p id='mensajeErrorUsuario' class='hide'>Ingresa tu usuario</p>
            </div>
            <div class='formP2'>
                <div class='formEdad'>
                    <label>Edad</label>
                    <input type="text" id="edadMascota" placeholder="8">
                    <p id='mensajeErrorEdad' class='hide'>Ingresa la edad de tu mascota</p>
                </div>
                <div class='formDogSex'>
                    <label>Sexo</label>
                    <div class='sexOptions'>
                        <div>
                            <label for="macho">Macho</label>
                            <input type="radio" name="dogSex" value="macho" id="macho">
                        </div>
                        <div>
                            <label for="hembra">Hembra</label>
                            <input type="radio" name="dogSex" value="hembra" id="hembra">
                        </div>
                    </div>
                    <p id='mensajeErrorSexo' class='hide'>Ingresa el sexo de tu mascota</p>
                </div>
            </div>
            <div>
                <label>Ubicación</label>
                <input type="text" id="dogLocation" placeholder="México, Querétaro">
                <p id='mensajeErrorUbicacion' class='hide'>Ingresa la ubicación de tu mascota</p>
            </div>
            <div>
                <label>Raza</label>
                <input type="text" id="dogBreed" placeholder="Chihuahua">
                <p id='mensajeErrorRaza' class='hide'>Ingresa la raza de tu mascota</p>
            </div>
            <div class='formP3'>
                <label>Tamaño | Talla</label>
                <div class='tallaOps'>
                    <div>
                        <label for="pequeña">Pequeña</label>
                        <input type="radio" name="dogSize" value="pequeña" id="pequena">
                    </div>
                    <div>
                        <label for="mediana">Mediana</label>
                        <input type="radio" name="dogSize" value="mediana" id="mediana">
                    </div>
                    <div>
                        <label for="grande">Grande</label>
                        <input type="radio" name="dogSize" value="grande" id="grande">
                    </div>
                </div>
                <p id='mensajeErrorTalla' class='hide'>Ecoja el tamaño</p>
            </div>
            <div class='formP4'>
                <div>
                    <input type="checkbox" id="esterilizacion" name="esterilizacion" value="esterilizacion">
                    <label for="esterilizacion">Esterilización</label>
                </div>
                <div>
                    <input type="checkbox" id="vacunas" name="vacunas" value="vacunas">
                    <label for="vacunas">Vacunas al día</label>
                </div>
            </div>
        </form>
        <div class="botonGuardar">
            <input  id='guardarDatos' type="submit" value="Registrarse">
        </div>
    `;
    contenedor.innerHTML = view;
    formularioRegistroMascotaLogica(contenedor);
    return contenedor;
};

export default FormularioRegistroMascota;
