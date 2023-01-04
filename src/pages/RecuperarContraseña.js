import { recuperarContraseñaLogica } from '../logic/recuperarContraseñaLogica.js';

const RecuperarContraseña = () => {
    const contenedor = document.createElement('section');
    contenedor.classList.add('recuperarContraseña');
    const view = `
        <div class ="imagen">
            <img src="../assets/tindog_logo_r.png" alt="imagen de logo: tindog"/>
        </div>
        <div class='contenidoInputs'>
            <div class="camposRecuperacion">
                <label>Correo</label>
                <input id="correoRecuperacion" type="text" placeholder="email@ejemplo.com">
                <p id='mensajeErrorMail' class='hide'>Ingresa tu correo</p>
            </div>
            <div class="botonRecuperacion">
                <div class="recuperarContrasena">
                    <input  id='recuperarContrasenaBtn' type="submit" value="Enviar Correo">
                </div>
                <div class="volverInicioSesion">
                    <p>¿Recordaste tu contraseña?</p>
                    <a href="inicio-sesion">Inicia Sesión</a>
                </div>
            </div>
        </div>
        <div class='contenidoMensaje hide'>
            <div class='mailImg'>
                <img src='../assets/mail.png' alt='icono de email' />
            </div>
            <div class='mensajes'>
                <p>Correo enviado</p>
                <span>Revisa tu bandeja de entrada o spam y sigue las instrucciones para recuperar tu contraseña</span>
            </div>
            <div class='boton'>
                <input id='volverIniciarSesion' type="submit" value="Iniciar sesión">
            </div>
        </div>
    `;
    contenedor.innerHTML = view;
    recuperarContraseñaLogica(contenedor);
    return contenedor;
};

export default RecuperarContraseña;
