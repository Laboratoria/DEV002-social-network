import { inicioSesionLogica } from '../logic/inicioSesionLogica.js';

const InicioSesion = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('inicio-sesion');
    const view = `
        <div class ="imagen">
            <img src="../assets/tindog_logo_r.png" alt="imagen de logo: tindog"/>
        </div>
        <div class="camposInicioSesion">
            <div>
                <label>Usuario | Correo </label>
                <input id="correoUsuarioInicio" type="text" placeholder="@pulguitas18">
                <p id='mensajeErrorCorreo2' class='hide'>Ingresa un correo</p>
            </div>
            <div>
                <label>Contraseña</label>
                <input id="contrasenaUsuarioInicio" type="password" placeholder="***********">
                <p id='mensajeErrorContrasena2' class='hide'>Ingresa una contraseña</p>
            </div>
        </div>
        <div class="botonesInicioSesion">
            <div class="iniciarSesion">
                <input  id='inicioSesionBtn' type="submit" value="Iniciar Sesión">
            </div>
            <div class="iniciarGoogle">
                <button id="inicioGmailBtn">
                    <img src="../assets/logo-google.png" alt="G " />
                    Iniciar con Google
                </button>
            </div>
            <div class="volverRegistro">
                <span>¿No tienes cuenta?</span>
                <a href="registro-usuario">Regístrate</a>
            </div>
            <div class="resetContrasena">
                <a href="recuperar-contrasena">Olvidé mi contraseña</a>
            </div>
        </div>
    `;
    contenedor.innerHTML = view;
    inicioSesionLogica(contenedor);
    return contenedor;
};

export default InicioSesion;
