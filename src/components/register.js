import { toNavigate } from "../main.js";
import { auth, signUpWithPass } from "../Firebase/firebase.js";

export const register = () => {
	//Creamos elementos de para el formulario de registro

	const registerDiv = document.createElement("div");
	const containerRegister = document.createElement("section");
	const containerRegisterTitle = document.createElement("h1");
	const containerLogoRegister = document.createElement("figure");
	const imgLogoRegister = document.createElement("img");
	const containerRegisterForm = document.createElement("div");
	const registerForm = document.createElement("form"); //formulario

	//Nombre
	const labelUserName = document.createElement("label");
	const inputUserName = document.createElement("input");

	//Ciudad
	const labelUserCity = document.createElement("label");
	const inputUserCity = document.createElement("input");

	//País
	const labelUserCountry = document.createElement("label");
	const inputUserCountry = document.createElement("input");

	//Mail
	const labelUserMail = document.createElement("label");
	const inputUserMail = document.createElement("input");

	//Contraseña y Verificación Contraseña
	const labelUserPass = document.createElement("label");
	const inputUserPass = document.createElement("input");
	const labelUserCheckPass = document.createElement("label");
	const inputUserCheckPass = document.createElement("input");

	//Selector
	const selectIsVegan = document.createElement("select");
	selectIsVegan.id = "selectVegan";
	const labelSelectVegan = document.createElement("label");
	const selectOption = document.createElement("option");
	const optionOne = document.createElement("option");
	const optionTwo = document.createElement("option");
	const optionThree = document.createElement("option");
	const optionFour = document.createElement("option");
	const optionFive = document.createElement("option");

	selectOption.setAttribute("selected", "");
	selectOption.setAttribute("value", "0");
	optionOne.setAttribute("value", "1");
	optionTwo.setAttribute("value", "2");
	optionThree.setAttribute("value", "3");
	optionFour.setAttribute("value", "4");
	optionFive.setAttribute("value", "5");

	selectOption.innerHTML = "Elige una opción";
	optionOne.innerHTML = "Sí, soy vegano";
	optionTwo.innerHTML = "Soy vegetarian@";
	optionThree.innerHTML = "No, pero lo intento";
	optionFour.innerHTML = "No, pero alguien cercano sí";
	optionFive.innerHTML = "Me interesa saber más";

	selectIsVegan.appendChild(selectOption);
	selectIsVegan.appendChild(optionOne);
	selectIsVegan.appendChild(optionTwo);
	selectIsVegan.appendChild(optionThree);
	selectIsVegan.appendChild(optionFour);
	selectIsVegan.appendChild(optionFive);

	const buttonRegister = document.createElement("button");

	//Clases y Placeholder
	registerDiv.className = "register-div";
	containerRegisterTitle.textContent = "Regístrate";
	containerLogoRegister.className = "container-logo-register";
	imgLogoRegister.src = "../img/sandia-logo.png";
	imgLogoRegister.className = "img-logo-register";
	containerRegister.className = "container-register";
	containerRegisterForm.className = "container-register-form";
	registerForm.className = "register-form";

	labelUserName.className = "userName";
	labelUserName.textContent = "Nombre de Usuario";
	inputUserName.className = "input-Name-User";
	inputUserName.placeholder = "Juanita";

	labelUserCity.className = "userCity";
	labelUserCity.textContent = "Ciudad, País";
	inputUserCity.className = "input-City-User";
	inputUserCity.placeholder = "Lima, Perú";

	labelUserMail.className = "userMail";
	labelUserMail.textContent = "Correo electrónico";
	inputUserMail.type = "email";
	inputUserMail.className = "input-Mail-User";
	inputUserMail.placeholder = "example@gmail.com";

	labelUserPass.className = "userPassword";
	labelUserPass.textContent = "Contraseña";
	inputUserPass.type = "password";
	inputUserPass.className = "input-Pass-User";
	inputUserPass.placeholder = "xxxxxxxxxx";

	labelUserCheckPass.className = "userCheckPass";
	labelUserCheckPass.textContent = "Verificar contraseña";
	inputUserCheckPass.type = "password";
	inputUserCheckPass.className = "input-Check-Pass";
	inputUserCheckPass.placeholder = "xxxxxxxxxx";

	labelSelectVegan.className = "label-user-select";
	labelSelectVegan.textContent = "¿Eres vegano?";

	buttonRegister.className = "button-Register";
	buttonRegister.textContent = "Crear cuenta";

	registerDiv.appendChild(containerRegister);
	containerRegister.appendChild(containerLogoRegister);
	containerLogoRegister.appendChild(imgLogoRegister);
	containerRegister.appendChild(containerRegisterTitle);
	containerRegister.appendChild(containerRegisterForm);
	containerRegisterForm.appendChild(registerForm);

	registerForm.appendChild(labelUserName);
	registerForm.appendChild(inputUserName);
	registerForm.appendChild(labelUserCity);
	registerForm.appendChild(inputUserCity);
	registerForm.appendChild(labelUserMail);
	registerForm.appendChild(inputUserMail);
	registerForm.appendChild(labelUserPass);
	registerForm.appendChild(inputUserPass);
	registerForm.appendChild(labelUserCheckPass);
	registerForm.appendChild(inputUserCheckPass);
	registerForm.appendChild(labelSelectVegan);
	registerForm.appendChild(selectIsVegan);
	registerForm.appendChild(buttonRegister);

	buttonRegister.addEventListener("click", () => {
		registerForm.addEventListener("submit", async (e) => {
			e.preventDefault(); //cancela comportamiento por defecto de refrescar la pagina
			const emailForm = inputUserMail.value;
			const passwordForm = inputUserPass.value;
			const nameForm = inputUserName.value;
			const cityForm = inputUserCity.value;

			signUpWithPass(auth, emailForm, passwordForm, nameForm)
				.then((userCredentials) => {
					console.log(userCredentials.user.id);
				})
				.catch((error) => {
					console.log(error.code);
					console.log(error.message);
				});
			// const nameRegister = await profileName(nameForm);
			// console.log(nameRegister);
			// console.log(userCredentials.user.uid);
			// const userSave = viewer();
			// console.log(userSave);
			toNavigate("/registerOk");
			// } catch (error) {
			// 	if (error.code === "auth/invalid-email") {
			// 		alert("email inválido");
			// 	} else if (error.code === "auth/weak-password") {
			// 		alert("contraseña débil");
			// 	} else if (error.code === "auth/email-already-in-use") {
			// 		alert("email en uso");
			// 	} else if (error.code) {
			// 		alert("algo anda mal");
			// 	}
			// }
		});
	});
	return registerDiv;
};
