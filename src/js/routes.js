/* eslint-disable no-unused-vars */
const PATHS = {
  home: {
    path: '/',
    template: `
            <section class="home" id="home">
                <div class="home-div" id="homeDiv">
                    <a class="home-create-account-intro">
                        ¡Hola!<br />
                        Hemos pensado para tí y tu amo esta novedosa red social dónde la
                        estrella serás tú y solamente tú.
                    </a>
                    <a class="home-question">¿Qué quieres hacer hoy?</a>
                    <button class="home-create-account" id="navLinkCreateAccount">
                        Registrarse
                    </button>
                    <button class="home-create-account" id="navLinkLogin">
                        Iniciar sesion
                    </button>
                </div>
            </section>
        `,
  },
  signup: {
    path: '/signup',
    template: `
            <section class="register" id="register">
                <form class="register-form" id="registerForm">
                    <input type="name" class="register-form-pet-name-input" id="registerFormPetNameInput" placeholder="Rudolph" required />
                    <input type="email" class="register-form-pet-email-input" id="registerFormPetEmailInput" placeholder="hola@petblr.com" required />
                    <input type="name" class="register-form-user-name-input" id="registerFormUserNameInput" placeholder="Roberto" required />
                    <input type="password" class="register-form-password-input" id="registerFormPasswordInput" placeholder="CONTRASEÑA" required />
                    <label class="register-form-psw-recomendation" id="registerFormPswRecomendation">DEBE TENER MÍNIMO 6 CARÁCTERES, UNA MAYÚSCULA Y UN NÚMERO</label>
                    <input type="password" class="register-form-repeat-password-input" id="registerFormRepeatPasswordInput"placeholder="REPETIR CONTRASEÑA" required />
                    <label class="register-form-repeat-psw hidden" id="registerFormRepeatPsw"> LAS CONTRASEÑAS DEBEN COINCIDIR</label>
                    <button class="register-div-btn" id="registerDivBtn">REGISTRARSE</button>
                </form>
            </section>
            <section class="auth-error hidden" id="authError">
                <div class="auth-error-div">
                    <h1 class="auth-error-text">Lo sentimos, correo en uso.</h1>
                </div>
            </section>
            <section class="auth-funciona hidden" id="authFunciona">
                <div class="auth-error-div">
                    <h1 class="auth-funciona-text">Funciona!</h1>
                </div>
            </section>

        `,
  },
  login: {
    path: '/login',
    template: `
        <section class="email-facebook-page" id="emailFacebookPage">
            <div class="email-facebook-div" id="emailFacebookDiv">
                <button class="email-btn" id="emailBtn">CORREO</button>
                <button class="facebook-btn" id="facebookBtn">FACEBOOK</button>
            </div>
        </section>
        `,
  },
};
