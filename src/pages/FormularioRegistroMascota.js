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
            <p>Nombre de tu mascota</p>
            <input type="text" name="" id="" placeholder="Sulivan">
        </form>
    `;
    contenedor.innerHTML = view;
    return contenedor;
};

export default FormularioRegistroMascota;
