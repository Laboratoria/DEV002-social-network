const Bienvenida = () => {
    const view = `
        <section class="inicio">
        <figure class="inicio-logo">
            <img src="" alt="imagen de logo: tindog"/>
        </figure>
        <figure class="inicio-bienvenida">
            <img src="" alt="imagen de bienvenida"/>
        </figure>
        <div class="inicio-botones">
            <button class="registro-btn">
                <a href='#/registro-usuario/'>Registrate</a>
            </button>
            <span>|</span>
            <button class="iniciarSesion-btn">Inicia sesión</button>
        </div>
        </section>
    `;
    return view;
};

export default Bienvenida;
