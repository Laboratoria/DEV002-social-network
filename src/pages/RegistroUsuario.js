const RegistroUsuario = () => {
    const view = `
        <section class="registro-usuario">
            <div>
                <img src="" alt="logo">
            </div>
            <div class="campos-registro">
                <div>
                    <label>Nombre</label>
                    <input id="nombre-usuario" type="text" placeholder="Sharon Arana">
                </div>
                <div>
                    <label>Usuario</label>
                    <input id="id-usuario" type="text" placeholder="@elsully">
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input id="correo-usuario" type="text" placeholder="sharendoza@gmail.com">
                </div>
                <div>
                    <label>Contraseña</label>
                    <input id="contrasena-usuario" type="password" placeholder="***********">
                </div>
                <div>
                    <label>Confirma tu contraseña</label>
                    <input id="confirmacion-contrasena" type="password" placeholder="***********">
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
// const datosUsuario = {
//     nombre: document.getElementById('nombre-usuario'),
//     usuario: document.getElementById('id-usuario'),
//     correo: document.getElementById('correo-usuario'),
//     contrasena: document.getElementById('contrasena-usuario'),
//     confirmacionContrasena: document.getElementById('confirmacion-contrasena'),
// }
