/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
// import { async } from 'regenerator-runtime';
import {
  saveTask, deleteTask, getTask, updateTask, tapLike, dislike, user, auth, dateTask,
} from './configuracion.js';

const tasksContainer = document.getElementById('contenedor-publicaciones');
const taskForm = document.getElementById('task-form');

let editStatus = false;
let id = '';

window.addEventListener('DOMContentLoaded', async () => {
  dateTask((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const task = doc.data();
      // const fecha=Timestamp.fromDate(new Date())
      const likes = task.likes;
      const likesNumber = likes.length;
      const userId = user().uid;
      const currentLike = likes.indexOf(userId);
      let likeSrc = '';
      const likeImg = () => {
        if (currentLike === -1) {
          likeSrc = 'images/like-logo.png';
        } else {
          likeSrc = './images/heart.png';
        }
      };
      likeImg();

      html += `
                <div class = 'contenedor-padre'> 
                  <p class="name-post"> ${task.name} </p>
                  <p class="date">${task.createdDateTime.toDate().toLocaleString('es-ES', {
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
  })} </p>
                    <textarea class ='div-post-publicado'>${task.description}</textarea>`;

      if (task.uid === auth.currentUser.uid) {
        html += `
                        <img src="./images/editlogo2.png" class='btn-edit' data-id="${doc.id}">
                        <img src="./images/deletelogo2.png" class='btn-delete' data-id="${doc.id}"> 
                    <div class="contenedor-likes">
                        <img class="like-logo" data-id="${doc.id}" src='${likeSrc}' alt="heart">
                        <p class="contadorLikes" data-id="${doc.id}"> ${likesNumber}</p>
                    </div>
                `;
      } else {
        html += ` 
                     <div class="contenedor-likes">
                        <img class="like-logo" data-id="${doc.id}" src='${likeSrc}' alt="heart">
                        <p class="contadorLikes" data-id="${doc.id}"> ${likesNumber}</p>
                    </div>
                    </div>
                    `;
      }
    });

    tasksContainer.innerHTML = html;

    const userId = user().uid;
    const botonLike = tasksContainer.querySelectorAll('.like-logo');

    botonLike.forEach((btn) => {
      btn.addEventListener('click', async (e) => { //  Al hacer clic, se obtiene su identificador único a partir de su atributo 'data-id'
        const id1 = e.target.dataset.id;
        const doc = await getTask(id1); // se llama a la función 'getTask' pasándole ese identificador como argumento
        const likes = doc.data().likes;
        const currentLike = likes.indexOf(userId);

        if (currentLike === -1) {
          tapLike(id1, userId); // se busca el valor 'userId' dentro de ese arreglo y se llama a la función 'tapLike' pasándole el identificador y el 'userId'
        } else {
          dislike(id1, userId);
        }
      });
    });

    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
    if (btnsDelete) {
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          if (confirm('¿Estás segura de que deseas eliminar esta publicación?')) {
            deleteTask(dataset.id); // se llama a la función deleteTask(dataset.id), pasándole como argumento el identificador de la tarea (que está almacenado en el atributo de datos dataset.id del botón)
          }
        });
      });
    }

    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id); // "target" es utilizada para acceder al elemento que lanzó el evento click
        const task = doc.data();

        taskForm['task-description'].value = task.description;

        editStatus = true;
        id = doc.id;

        taskForm['btn-publicar'].innerText = 'Publicar';
      });
    });
  });
});

if (taskForm) {
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = taskForm['task-description'];

    if (description.value.trim() === '') {
      alert('No se pueden publicar campos vacíos :(');
    } else {
      if (!editStatus) {
        saveTask(description.value);
      } else {
        updateTask(id, {
          description: description.value,
        });

        editStatus = false;
      }

      taskForm.reset();
    }
  });
}
