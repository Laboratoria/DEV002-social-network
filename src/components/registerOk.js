import { toNavigate } from "../main.js";
import { auth, viewer, signInWithPass } from "../Firebase/firebase.js";
import { register } from "../components/register.js";

export const registerOk = () => {
	const user = auth.currentUser;
	const displayName = user.displayName;
	const registerOkDiv = document.createElement("div");
	const containerOk = document.createElement("section");
	// const containerOkBackground = document.createElement("div");
	// const imgOkBackground = document.createElement("img");
	const containerOkIcon = document.createElement("figure");
	const imgOkLogo = document.createElement("img");
	const containerOkMessage = document.createElement("div");
	const paragraphOkHello = document.createElement("p");
	const paragraphName = document.createElement("p");
	const paragraphOkMessage = document.createElement("p");
	const containerImgOk = document.createElement("figure");
	const imgOkLettuce = document.createElement("img");
	const containerContinue = document.createElement("div");
	const buttonOkContinue = document.createElement("button");

	registerOkDiv.className = "ok-div-container";
	containerOk.className = "ok-section-container";
	containerOkIcon.className = "ok-icon-container";
	imgOkLogo.className = "ok-img-logo";
	imgOkLogo.src = "../img/sandia-logo.png";
	containerOkMessage.className = "ok-message-container";
	paragraphOkHello.className = "ok-p-hello";
	paragraphOkHello.textContent = "Hola, ";
	paragraphName.className = "ok-p-hello";
	paragraphName.textContent = displayName;
	paragraphOkMessage.className = "ok-p-message";
	paragraphOkMessage.textContent =
		"Te damos la bienvenida de VeganShip, donde podrás compartir con personas del mundo vegano";
	containerImgOk.className = "ok-img-container";
	imgOkLettuce.className = "ok-img-lettuce";
	imgOkLettuce.src = "../img/lechuga-2.png";
	containerContinue.className = "ok-container-continue";
	buttonOkContinue.className = "ok-button-continue";
	buttonOkContinue.textContent = "Continuar";

	registerOkDiv.appendChild(containerOk);
	containerOk.appendChild(containerOkIcon);
	containerOkIcon.appendChild(imgOkLogo);
	containerOk.appendChild(containerOkMessage);
	containerOkMessage.appendChild(paragraphOkHello);
	containerOkMessage.appendChild(paragraphOkMessage);
	containerOk.appendChild(containerImgOk);
	containerImgOk.appendChild(imgOkLettuce);
	containerOk.appendChild(containerContinue);
	containerContinue.appendChild(buttonOkContinue);

	buttonOkContinue.addEventListener("click", () => {
		toNavigate("/feed");
	});
	return registerOkDiv;
};
