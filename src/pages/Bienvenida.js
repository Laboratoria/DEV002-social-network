const Bienvenida = () => {
    const view = `
        <section class="inicio">
        <figure class="inicio-logo">
            <img src="../assets/tindog_logo_b.png" alt="imagen de logo: tindog"/>
        </figure>
        <figure class="inicio-bienvenida">
            <img src="../assets/dog-iniciosesion.png" alt="imagen de bienvenida"/>
        </figure>
        <div class="inicio-botones">
            <a class="registro-btn" href='registro-usuario'>Registrate</a>
            <span>|</span>
            <a class="iniciarSesion-btn" href='inicio-sesion'>Inicia sesión</a>
        </div>
        </section>
    `;
    return view;
};

export default Bienvenida;
