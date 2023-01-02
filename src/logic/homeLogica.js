export const homeLogica = (contenedor) => {
    const profileOps = contenedor.querySelector('.profileImage');
    const dropdownMenu = contenedor.querySelector('.dropdownMenu');

    profileOps.addEventListener('click', () => {
        console.log('hola');
        dropdownMenu.classList.add('blockContent');
    });
};
