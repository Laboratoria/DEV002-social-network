import { registroUsuarioLogica } from '../logic/registroUsuarioLogica.js';

const RegistroUsuario = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('registro-usuario');
    const view = `
        <div>
            <img src="" alt="logo">
        </div>
        <div class="campos-registro">
            <div>
                <label>Nombre</label>
                <input id="nombreUsuario" type="text" placeholder="Sharon Arana">
            </div>
            <div>
                <label>Usuario</label>
                <input id="idUsuario" type="text" placeholder="@elsully">
            </div>
            <div>
                <label>Correo electrónico</label>
                <input id="correoUsuario" type="text" placeholder="sharendoza@gmail.com">
            </div>
            <div>
                <label>Contraseña</label>
                <input id="contrasenaUsuario" type="password" placeholder="***********">
            </div>
            <div>
                <label>Confirma tu contraseña</label>
                <input id="confirmacionContrasena" type="password" placeholder="***********">
            </div>
        </div>
        <div class="botones-registro">
            <button id="registroCorreoBtn">
                <a href="formulario-registro">Registrarse</a>
            </button>
        </div>
        <div>
            <button id="registroGmailBtn">Registrarse con Google</button>
        </div>
        <div>
            <span>¿Ya tienes cuenta?</span>
            <button id="inicioSesionBtn">Iniciar Sesión</button>
        </div>
    `;
    contenedor.innerHTML = view;
    registroUsuarioLogica(contenedor);
    return contenedor;
};

export default RegistroUsuario;
