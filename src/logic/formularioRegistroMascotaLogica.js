export const formularioRegistroMascotaLogica = (contenedor) => {
    const saveUserData = contenedor.querySelector('#guardarDatos');

    saveUserData.addEventListener('click', () => {
        window.location.href = '/';
    });
};
