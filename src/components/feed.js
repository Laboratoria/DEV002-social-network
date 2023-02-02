import { toNavigate } from "../main.js";
import { auth, logout } from "../Firebase/firebase.js";
import { savePost, onGetPosts, deletePost } from "../Firebase/firestore.js";

export const feed = () => {
	const feedDiv = document.createElement("div");
	const containerNewPost = document.createElement("div");
	const newPostForm = document.createElement("form");
	const textAreaNewPost = document.createElement("textarea");
	const inputLocation = document.createElement("input");
	const buttonPost = document.createElement("button");
	const buttonSignOut = document.createElement("button");
	const containerTimeLine = document.createElement("div");

	feedDiv.className = "div-container-feed";
	containerNewPost.className = "div-container-newpost";
	newPostForm.className = "form-newpost";
	textAreaNewPost.className = "text-area-write-post";
	inputLocation.className = "input-post-location";
	buttonPost.className = "button-post";
	buttonSignOut.className = "button-signOut";
	containerTimeLine.className = "div-container-timeline";

	buttonPost.textContent = "Publicar";
	buttonSignOut.textContent = "Cerrar Sesión";

	feedDiv.appendChild(containerNewPost);
	feedDiv.appendChild(containerTimeLine);
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
		// const querySnapshot = await getPost(); //Trae los datos que existen en ese momento.
		// onSnapshot(postCollection, (querySnapshot) => {
		onGetPosts((querySnapshot) => {
			let html = "";
			querySnapshot.forEach((doc) => {
				const post = doc.data();
				html += `
			<div>
				<h3>${post.location} </h3>
				<p>${post.postContent} </p>
				<button class = "button-trash" data-id="${doc.id}">Trash</button>
			</div>`;
			});
			containerTimeLine.innerHTML = html;
			const buttonsTrashPost = containerTimeLine.querySelectorAll(".button-trash");
			buttonsTrashPost.forEach((buttomTrash) => {
				buttomTrash.addEventListener("click", (e) => {
					const postId = e.target.dataset;
					deletePost(postId.id);
				});
			});
			console.log(buttonsTrashPost);
		});
	});
	return feedDiv;
};
