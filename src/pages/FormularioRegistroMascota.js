const FormularioRegistroMascota = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('formularioMascota');
    const view = `
        <p>Aqui van los datos de tu perrito</p>
    `;
    contenedor.innerHTML = view;
    return contenedor;
};

export default FormularioRegistroMascota;
