import { inicioSesionLogica } from '../logic/inicioSesionLogica.js';

const InicioSesion = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('inicio-sesion');
    const view = `
        <div class ="imagen">
            <img src="../assets/tindog_logo_r.png" alt="imagen de logo: tindog"/>
        </div>
        <div class="campos-inicio-sesion"> 
            <div>
                <label>Usuario | Correo </label>
                <input id="correoUsuarioInicio" type="text" placeholder="@pulguitas18">
            </div>
            <div>
                <label>Contraseña</label>
                <input id="contrasenaUsuarioInicio" type="password" placeholder="***********">
            </div>
        </div>
        <div class="botones-inicio-sesion">
            <button id="inicioSesionBtn">
                <a href="">Iniciar Sesión</a>
            </button>
        </div>
        <div class="botones-inicio-google">
            <button id="inicioGmailBtn"><img src="../assets/logo-google.png" alt="G " />Iniciar con Google</button>
        </div>
        <div class="botones-volver-registro">
            <span>¿No tienes cuenta?</span>
            <button id="volverRegistroBtn"><a href="registro-usuario">Regístrate</a>
            </button>
        </div>
        <div class="resetear-contrasena">
            <button id="resetearBtn">
                <a href="">Olvidé mi contraseña</a>
            </button>
        </div>

    `;
    contenedor.innerHTML = view;
    inicioSesionLogica(contenedor);
    return contenedor;
};

export default InicioSesion;
