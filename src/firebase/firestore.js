//import { async } from 'regenerator-runtime';
import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask} from './configuracion.js'

const tasksContainer = document.getElementById('contenedor-publicaciones');
const taskForm = document.getElementById('task-form');

let editStatus = false;
let id = '';

window.addEventListener('DOMContentLoaded', async () =>{
        onGetTasks((querySnapshot) => {
        let html = ''

            querySnapshot.forEach(doc => {
                const task = doc.data()
                html += ` 
                <div class = 'contenedor-padre'> 
                    <textarea class ='div-post-publicado'>${task.description}</textarea>
                        <img src="./images/editlogo2.png" class='btn-edit' data-id="${doc.id}">
                        <img src="./images/deletelogo2.png" class='btn-delete' data-id="${doc.id}"> 
                    <div class="contenedor-likes">
                        <img class="like-logo" data-id="${doc.id}" src="./images/heart.png" alt="heart">
                        <p> 3 </p>
                    </div>
                </div>
                `;
        }); 
            
        tasksContainer.innerHTML = html;

    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
    btnsDelete.forEach(btn => {
        btn.addEventListener('click',({target: { dataset }}) => {
            if(confirm("¿Estás segura de que deseas eliminar esta publicación?")) {
                deleteTask(dataset.id)
        }
    })
})

    const botonLike = tasksContainer.querySelectorAll('.like-logo')
    botonLike.forEach(btn => {
        btn.addEventListener('click', ({target: { dataset }}) => {
        updateTask(dataset.id, {
            likes:[],
        });

        
        })
    })


    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit')
    btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const doc = await getTask(e.target.dataset.id)
            console.log(doc.data())
            const task = doc.data() 

            taskForm['task-description'].value = task.description
            editStatus = true;
            id= doc.id

            taskForm['btn-publicar'].innerText = 'Publicar'
            })
        })
    });
});

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

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
