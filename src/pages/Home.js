const Home = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('Home');
    const view = `
        <h3>Aqui va home</h3>
    `;
    contenedor.innerHTML = view;
    return contenedor;
};

export default Home;
