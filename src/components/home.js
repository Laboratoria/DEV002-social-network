import { toNavigate } from "../main.js";
import {
	auth,
	signInWithPass,
	viewer,
	provider,
	popUpGoogle,
} from "../Firebase/firebase.js";

export const home = () => {
	//Creamos elementos del Formulario
	//const containerHeader = document.createElement("header");
	//const imgHeader = document.createElement("img");
	const homeDiv = document.createElement("div");
	const container = document.createElement("section");
	const containerHeader = document.createElement("header");
	const imgLogo = document.createElement("img");
	const containerForm = document.createElement("div");
	const loginForm = document.createElement("form");
	const labelMail = document.createElement("label");
	const inputMail = document.createElement("input");
	const labelPassword = document.createElement("label");
	const inputPassword = document.createElement("input");
	const buttonLogin = document.createElement("button");
	const containerGoogle = document.createElement("div");
	const iconLogoGoogle = document.createElement("i");
	const buttonGoogle = document.createElement("button");
	const containerRegister = document.createElement("div");
	const labelRegister = document.createElement("label");
	const hrefRegister = document.createElement("a");

	homeDiv.className = "div-container";
	container.className = "container";
	containerHeader.className = "container-header";
	//imgHeader.className = "img-header";
	imgLogo.src = "../img/Logo VeganShip.png";
	imgLogo.className = "img-logo";
	containerForm.className = "container-form";
	loginForm.className = "login-form";
	labelMail.className = "label-mail labels";
	labelMail.textContent = "Correo electrónico";
	inputMail.type = "email";
	inputMail.id = "i-input-login-mail";
	inputMail.className = "input-login-mail inputs";
	inputMail.placeholder = "tucorreo@gmail.com";
	inputMail.required = "true";
	labelPassword.className = "label-pass labels";
	labelPassword.textContent = "Contraseña";
	inputPassword.type = "text";
	inputPassword.id = "i-input-login-password";
	inputPassword.className = "input-login-password inputs";
	inputPassword.placeholder = "xxxxxxxxxxxxxx";
	inputPassword.type = "password";
	inputPassword.required = "true";
	buttonLogin.textContent = "Iniciar sesión";
	buttonLogin.className = "button-login buttons";
	containerGoogle.className = "container-google";
	iconLogoGoogle.id = "span-i";
	iconLogoGoogle.className = "fa-brands fa-google";
	buttonGoogle.textContent = "Continuar con Google";
	buttonGoogle.className = "button-google buttons";
	containerRegister.className = "container-register";
	labelRegister.className = "label-reg labels";
	labelRegister.textContent = "¿No tienes una cuenta?";
	hrefRegister.textContent = "Regístrate";
	hrefRegister.className = "href-register";

	//homeDiv.appendChild(loginForm);
	homeDiv.appendChild(container);
	container.appendChild(containerHeader);
	containerHeader.appendChild(imgLogo);
	container.appendChild(containerForm);
	containerForm.appendChild(loginForm);
	loginForm.appendChild(labelMail);
	loginForm.appendChild(inputMail);
	loginForm.appendChild(labelPassword);
	loginForm.appendChild(inputPassword);
	loginForm.appendChild(buttonLogin);
	container.appendChild(containerGoogle);
	containerGoogle.appendChild(buttonGoogle);
	buttonGoogle.appendChild(iconLogoGoogle);
	container.appendChild(containerRegister);
	containerRegister.appendChild(labelRegister);
	containerRegister.appendChild(hrefRegister);

	//loginForm.appendChild(loginForm);
	// loginForm.appendChild(hrefRegister);
	// loginForm.appendChild(buttonGoogle);

	viewer();

	buttonLogin.addEventListener("click", () => {
		loginForm.addEventListener("submit", async (e) => {
			e.preventDefault();
			const emailLogin = inputMail.value;
			const passwordLogin = inputPassword.value;
			console.log(emailLogin, passwordLogin);
			try {
				const userCredentials = await signInWithPass(
					auth,
					emailLogin,
					passwordLogin
				);
				console.log(userCredentials.user);
				toNavigate("/feed");
			} catch (error) {
				if (error.code === "auth/user-not-found") {
					alert("usuario NO encontrado");
				} else if (error.code === "auth/wrong-password") {
					alert("Contraseña incorrecta");
				} else if (error.code) {
					console.log(error.code);
				}
			}
		});
	});

	hrefRegister.addEventListener("click", () => toNavigate("/register"));
	buttonGoogle.addEventListener("click", async (e) => {
		e.preventDefault();

		try {
			const credentials = await popUpGoogle(auth, provider);
			console.log(credentials.user);
			toNavigate("/feed");
		} catch (error) {
			console.log(error);
		}
	});

	return homeDiv;
};
