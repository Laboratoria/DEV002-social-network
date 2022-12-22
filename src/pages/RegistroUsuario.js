const RegistroUsuario = () => {
    const view = `
        <section class="registro-usuario">
            <div>
                <img src="" alt="logo">
            </div>
            <div class="campos-registro">
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Sharon Arana">
                </div>
                <div>
                    <label>Usuario</label>
                    <input type="text" placeholder="@elsully">
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input type="text" placeholder="sharendoza@gmail.com">
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" placeholder="***********">
                </div>
                <div>
                    <label>Confirma tu contraseña</label>
                    <input type="password" placeholder="***********">
                </div>
            </div>
            <div class="botones-registro">
                <button id="registroCorreo-btn">
                    <a href="formulario-registro">Registrarse</a>
                </button>
            </div>
            <div>
                <button id="registroGmail-btn">Registrarse con Google</button>
            </div>
            <div>
                <span>¿Ya tienes cuenta?</span>
                <button id="inicioSesion-btn">Iniciar Sesión</button>
            </div>
        </section>
    `;
    return view;
};

export default RegistroUsuario;
