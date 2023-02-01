import { toNavigate } from "../main.js";
import { auth, logout } from "../Firebase/firebase.js";
import { savePost, getPost } from "../Firebase/firestore.js";

export const feed = () => {
	const feedDiv = document.createElement("div");
	const containerNewPost = document.createElement("div");
	const newPostForm = document.createElement("form");
	const textAreaNewPost = document.createElement("textarea");
	const inputLocation = document.createElement("input");
	const buttonPost = document.createElement("button");
	const buttonSignOut = document.createElement("button");

	feedDiv.className = "div-container-feed";
	containerNewPost.className = "div-container-newpost";
	newPostForm.className = "form-newpost";
	textAreaNewPost.className = "text-area-write-post";
	inputLocation.className = "input-post-location";
	buttonPost.className = "button-post";
	buttonSignOut.className = "button-signOut";

	buttonPost.textContent = "Publicar";
	buttonSignOut.textContent = "Cerrar Sesión";

	feedDiv.appendChild(containerNewPost);
	feedDiv.appendChild(buttonSignOut);
	containerNewPost.appendChild(newPostForm);
	newPostForm.appendChild(textAreaNewPost);
	newPostForm.appendChild(inputLocation);
	newPostForm.appendChild(buttonPost);

	buttonSignOut.addEventListener("click", () => toNavigate("/"));
	buttonSignOut.addEventListener("click", async (e) => {
		e.preventDefault(); //cancela comportamiento por defecto de refrescar la pagina
		try {
			await logout(auth);
			toNavigate("/");
		} catch (error) {
			console.log(error);
		}
	});

	newPostForm.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("publicando en Firestore");

		savePost(textAreaNewPost.value, inputLocation.value);
		newPostForm.reset();
	});

	window.addEventListener("DOMContentLoaded", async () => {
		const querySnapshot = await getPost(); //Trae los datos que existen en ese momento.
		let html = "";
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
		});
	});
	return feedDiv;
};
