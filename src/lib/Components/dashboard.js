// import { async } from "regenerator-runtime";
import { onNavigate } from "../../main.js";
import { app } from "../Firebase.js";
import { submitPost, logOut, onGetPost, currentUserInfo, getAllPosts, deletePost, getTask } from "../index.js";


export const login = () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('id', 'div-login');
  const viewLogin = `
  <html>
  <header>
      <img src='./images/logo.png' alt='logoReading' class='logo-header'>
      <input type='image' id='btn-sign-out' src='../../images/logout.png'></input>
      <div class='container-images'>
      </div>
  </header>
  <main>
      <div id='container-btn-input'>
          <img id='img-input' src='images/user.png' alt='profile'>
          <button type='button' id='btn-input-modal'>Deja aqui la reseña de tu libro...</button>
      </div>
      <div id='timeline-posts'></div>
      <div id='modal-background-post'>
          <div id='modal-content-post'>
              <div id='space-line'>
                  <p>Crear Reseña</p>
                  <img src='images/close.png' class='btn-exit'>
              </div>
              <div id='line'></div>
              <div id='after-line'>
                  <div id='container-img-text'>
                      <img id='img-modal-post' src='images/user.png' alt='profile'>
                      <div id='container-text'></div>
                      </div>
                      <textarea type='text' id='input-post' placeholder='Deja aquí la reseña de tu libro'> </textarea>
                      <button disabled type='button' id='btn-post' class='btn-post-inactive'>PUBLICAR</button>
                  </div>
              </div>
          </div>
          <div id='div-post'></div>
          <div id='container-modal-delete'></div>
  </main>
  <footer>© 2022 desarrollado por Sandra, Laura B. y Laura G.</footer>
  
  </html>`;

  divLogin.innerHTML = viewLogin;

  //Funcion postear
  const divTimeLine = divLogin.querySelector('#timeline-posts');
  //funcion que llama getDocs de firestore y re pinta los html elements para mostrar
  const refreshPosts = () => {

    getAllPosts().then((posts) => {
      divTimeLine.innerHTML = '';
      posts.forEach(post => {
        const postData = post.data();
        let divPostEntry = document.createElement("div");

        let imgUser = document.createElement("img");
        let userName = document.createElement("h2");
        let userPostText = document.createElement("h2");
        let editIcon = document.createElement('img');
        let dateTimePost = document.createElement("h1");
        let likePost = document.createElement('img');
        let deleteIcon = document.createElement('img');
    

        divPostEntry.className = "timeLine-post";
        imgUser.setAttribute('src', 'images/user.png');
        imgUser.className = "iconUser";
        userName.innerHTML = postData.user;
        userName.className = 'user-name-post';
        userPostText.innerHTML = postData.postText;
        editIcon.setAttribute('src','/images/editar.png'); 
        editIcon.className = 'edit-icon';
        editIcon.setAttribute('data-id', post.id);
        editIcon.onclick = editPostListener;
        deleteIcon.setAttribute('src','/images/delete.png');
        deleteIcon.className = 'delete-icon';
        deleteIcon.setAttribute('data-id', post.id);//el data-id es algo que ya trae firebase
        // console.log(post.id);
        deleteIcon.onclick = deletePostListener;
        likePost.setAttribute('src', '/images/1erlike.png');
        likePost.className = 'primer-like';
        userPostText.className = 'textPost';
        dateTimePost.innerHTML = new Date(post.data().createdDateTime.seconds * 1000).toLocaleString();
        dateTimePost.className = 'date-post'



        divPostEntry.appendChild(userName);
        divPostEntry.appendChild(imgUser);
        divPostEntry.appendChild(userPostText);
        userPostText.appendChild(dateTimePost);
        userPostText.appendChild(editIcon);
        userPostText.append(deleteIcon);
        userPostText.appendChild(likePost);

        divTimeLine.appendChild(divPostEntry);
        document.querySelector('#btn-post').innerText = 'PUBLICAR';
        document.querySelector('#modal-background-post').style.display = 'none';
        document.querySelector('#modal-content-post').style.display = 'none';
      });

    });
  };
//listener de onclick editarPost
  const editPostListener = async(event) => {
    const doc = await getTask(event.target.dataset.id);
    console.log('documento de un post',doc.data());
    const task = doc.data();
    divLogin.querySelector('#input-post').value= task.postText;
    console.log('valordeTexto',task.postText);
  };

//listener del onclick detelePost
  const deletePostListener = (event) => {//event por default
    const postId = event.target.dataset.id;//sacamos del target el id
    console.log('delete clicked', postId);
 
    deletePost(postId)
    .then((response) => {
      console.log(response);
      alert(' Comentario borrado');
      refreshPosts();
    })
    .catch(error => {console.log(error);});
  };

  //aqui se manda llamar el getDocs al cargar la pagina en Dashboard
  refreshPosts();

  //Funcion cerrar sesion
  const btnLogout = divLogin.querySelector('#btn-sign-out');
  btnLogout.addEventListener('click', () => {
    logOut(onNavigate);
  });

  divLogin.append(
    btnLogout,
  );

  //Funcion abrir modal
  const btnModal = divLogin.querySelector('#btn-input-modal');
  btnModal.addEventListener('click', () => {
    document.querySelector('#modal-background-post').style.display = 'flex';
    document.querySelector('#modal-content-post').style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector('#input-post').focus();

    //Funcion cerrar modal
    const btnExit = divLogin.querySelector('.btn-exit');
    btnExit.addEventListener('click', () => {
      document.querySelector('#btn-post').innerText = 'PUBLICAR';
      document.querySelector('#modal-background-post').style.display = 'none';
      document.querySelector('#modal-content-post').style.display = 'none';
      document.body.style.overflow = 'visible';
    });

    //Funcion activacion boton publicar
    const inputPost = divLogin.querySelector('#input-post');
    inputPost.addEventListener('keyup', () => {
      const valueInput = inputPost.value.trim();
      // trim() metodo que no permite activar boton con espacio
      if (valueInput === '') {
        document.querySelector('#btn-post').disabled = true; // boton publicar inactivo
      } else {
        document.querySelector('#btn-post').disabled = false; // boton publicar activo
      }
    });

    const btnPost = divLogin.querySelector('#btn-post');
    console.log(btnPost);
    btnPost.addEventListener('click', () => {
      console.log('btn clicked');
      const postTxt = divLogin.querySelector('#input-post').value;
      submitPost(postTxt)
        .then((response) => {
          console.log('Response: ', response);
          document.querySelector('#modal-background-post').style.display = 'none';
          document.querySelector('#modal-content-post').style.display = 'none';
          divLogin.querySelector('#input-post').value = '';
          //se vuelve a mandar llamar getDocs una vez que el nuevo post fue posteado correctamente
          refreshPosts();
        })
        .catch((error) => {
          console.error('Error: ', error);
        })
        .finally(() => {
          console.log('Terminé');
        });
    });
  });
 
  return divLogin;

};