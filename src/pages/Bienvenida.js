const Bienvenida = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('inicio');
    const view = `
        <figure class="inicio-logo">
            <img src="../assets/tindog_logo_b.png" alt="imagen de logo: tindog"/>
        </figure>
        <figure class="inicio-bienvenida">
            <img src="../assets/dog-iniciosesion.png" alt="imagen de bienvenida"/>
        </figure>
        <div class="inicio-botones">
            <a class="registro-btn" href='registro-usuario'>Regístrate</a>
            <span>|</span>
            <a class="iniciarSesion-btn" href='inicio-sesion'>Inicia sesión</a>
        </div>
    `;
    contenedor.innerHTML = view;
    return contenedor;
};

export default Bienvenida;
