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
                <input type="text" id="" placeholder="Sulivan">
            </div>
            <div>
                <label>Edad</label>
                <input type="text" id="" placeholder="8">
                <label>Sexo</label>
                <label for="macho">Macho</label>
                <input type="radio" name="dogSex" value="macho" id="macho">
                <label for="hembra">Hembra</label>
                <input type="radio" name="dogSex" value="hembra" id="hembra">
            </div>
            <div>
                <label>Ubicación</label>
                <input type="text" id="dogLocation" placeholder="México, Querétaro">
            </div>
            <div>
                <label>Raza</label>
                <input type="text" id="dogRace" placeholder="Chihuahua">
            </div>
            <div>
                <label>Tamaño | Talla</label>
                <label for="pequeña">Pequeña</label>
                <input type="radio" name="dogSize" value="pequeña" id="pequeña">
                <label for="mediana">Mediana</label>
                <input type="radio" name="dogSize" value="mediana" id="mediana">
                <label for="grande">Grande</label>
                <input type="radio" name="dogSize" value="grande" id="grande">
            </div>
            <div>
                <input type="checkbox" id="esterilizacion" name="esterilizacion" value="esterilizacion">
                <label for="esterilizacion">Esterilización</label>
                <input type="checkbox" id="vacunas" name="vacunas" value="vacunas">
                <label for="vacunas">Vacunas al día</label>
            </div>
        </form>
        <div class="botonGuardar">
            <input  id='guardarDatos' type="submit" value="Registrarse">
        </div>
    `;
    contenedor.innerHTML = view;
    return contenedor;
};

export default FormularioRegistroMascota;
