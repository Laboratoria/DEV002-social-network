import { toNavigate } from "../main.js";
import { register } from "../components/register.js";
import { auth, logout, viewer } from "../Firebase/firebase.js";
import {
	addPost,
	onGetPosts,
	postCollection,
	userCollection,
	getPosts,
	collection,
	db,
	onSnapshot,
	deletePost, query, orderBy, onGetDates,
} from "../Firebase/firestore.js";
import { postPrint } from "./post.js";

export const feed = () => {
	//Creamos elementos del Feed
	const feedDiv = document.createElement("div");
	feedDiv.classList = "feedDiv";
	const header = document.createElement("div");

	const imgHeader = document.createElement("img");
	imgHeader.src = "../img/Logo VeganShip.png";
	imgHeader.classList = "imgHeader";

	const inputSearchHeader = document.createElement("input");
	inputSearchHeader.placeholder = "tu búsqueda";

	const buttonSignOut = document.createElement("button");
	buttonSignOut.textContent = "Cerrar Sesión";

	const newPostContainer = document.createElement("form");
	newPostContainer.classList = "newPostContainer";
	const newPostLocation = document.createElement("input");
	newPostLocation.placeholder = "ubicación";

	const newPostTag = document.createElement("input");
	newPostTag.placeholder = "etiquetas";

	const newPostInput = document.createElement("textarea");
	newPostInput.classList = "newPostContent";
	const newPostButton = document.createElement("button");
	newPostButton.textContent = "publicar";
	const postFeed = document.createElement("section");
	postFeed.className = "post-feed";

	feedDiv.appendChild(header);
	header.appendChild(imgHeader);
	header.appendChild(inputSearchHeader);
	header.appendChild(buttonSignOut);
	feedDiv.appendChild(newPostContainer);
	newPostContainer.appendChild(newPostLocation);
	newPostContainer.appendChild(newPostTag);
	newPostContainer.appendChild(newPostInput);
	newPostContainer.appendChild(newPostButton);
	feedDiv.appendChild(postFeed);

    window.addEventListener('DOMContentLoaded', async () => {

        const queryRef = query(collection(db, 'documents'), orderBy('createdAt', 'desc'));
        console.log(queryRef)
        onSnapshot(queryRef, (querySnapshot) => {
            postFeed.innerHTML = ''
            querySnapshot.forEach(doc => {
                const postDiv = document.createElement('div')
                //console.log(doc.data())
                postDiv.className = "postDiv"
                const printedPost = postPrint(doc)
                postDiv.innerHTML = printedPost
                postFeed.appendChild(postDiv)
                //postDiv.innerHTML += `
                //<div class = post"> ${doc.data().post}</div>
                //`              
            });

			const btnDelete = postFeed.querySelectorAll(".buttonDelete");
			btnDelete.forEach((btn) => {
				btn.addEventListener("click", async ({ target: { dataset } }) => {
					try {
						await deletePost(dataset.id);
					} catch (error) {
						console.log(error);
					}
				});
			});
		});
	});

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

	newPostButton.addEventListener("click", async (e) => {
		e.preventDefault();
		try {
			const postContent = newPostInput.value;
			const contenidoPost = await addPost(postContent);
			//console.log(postContent);
			//console.log(contenidoPost)
			newPostContainer.reset();
		} catch (error) {
			console.log(error);
		}
	});

	return feedDiv;
};
