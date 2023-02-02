import { toNavigate } from "../main.js";
import { auth, logout } from "../Firebase/firebase.js";
import {
	savePost,
	onGetPosts,
	deletePost,
	updatePost,
	getPost,
} from "../Firebase/firestore.js";

export const feed = () => {
	const feedDiv = document.createElement("div");
	const containerNewPost = document.createElement("div");
	const postForm = document.createElement("form");
	const textAreaNewPost = document.createElement("textarea");
	const inputLocation = document.createElement("input");
	const buttonPost = document.createElement("button");
	const buttonSignOut = document.createElement("button");
	const containerTimeLine = document.createElement("div");

	feedDiv.className = "div-container-feed";
	containerNewPost.className = "div-container-newpost";
	postForm.className = "form-newpost";
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
	containerNewPost.appendChild(postForm);
	postForm.appendChild(textAreaNewPost);
	postForm.appendChild(inputLocation);
	postForm.appendChild(buttonPost);

	let editPostStatus = false;
	let id = "";
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

	postForm.addEventListener("submit", (e) => {
		e.preventDefault();
		// console.log("publicando en Firestore");
		if (editPostStatus) {
			updatePost(id, {
				postContent: textAreaNewPost.value,
				location: inputLocation.value,
			});
		} else {
			savePost(textAreaNewPost.value, inputLocation.value);
		}
		postForm.reset();
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
				<button class = "button-edit" data-id="${doc.id}">Edit</button>
			</div>`;
			});
			containerTimeLine.innerHTML = html;

			const buttonsTrashPost = containerTimeLine.querySelectorAll(".button-trash");
			buttonsTrashPost.forEach((buttonTrash) => {
				buttonTrash.addEventListener("click", (e) => {
					const postId = e.target.dataset;
					deletePost(postId.id);
				});
			});

			const buttonsEditPost = containerTimeLine.querySelectorAll(".button-edit");
			buttonsEditPost.forEach((buttonEdit) => {
				console.log(buttonEdit);
				buttonEdit.addEventListener("click", async (e) => {
					const doc = await getPost(e.target.dataset.id);
					const postData = doc.data();

					textAreaNewPost.value = postData.postContent;
					inputLocation.value = postData.location;

					editPostStatus = true;
					id = e.target.dataset.id;

					buttonPost.textContent = "Guardar";
				});
			});
		});
	});
	return feedDiv;
};
