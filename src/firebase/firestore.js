//import { async } from 'regenerator-runtime';
import { saveTask, getTasks, onGetTasks, deleteTask} from './configuracion.js'

const tasksContainer = document.getElementById('contenedor-publicaciones');
const taskForm = document.getElementById('task-form');


window.addEventListener('DOMContentLoaded', async () =>{
        onGetTasks((querySnapshot) => {
        let html = ''

            querySnapshot.forEach(doc => {
                const task = doc.data()
                html += ` 
                <div> 
                    <p>${task.description}</p>
                    <button class='btn-delete' data-id="${doc.id}"> Delete </button>
                </div>
                `;
            }); 
            
        tasksContainer.innerHTML = html;
        
        const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')

        btnsDelete.forEach(btn => {
            btn.addEventListener('click',({target: {dataset}}) => {
                deleteTask(dataset.id)

                    })
                })
            });
        });

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

   const description = taskForm['task-description'];
   
   saveTask(description.value)

   taskForm.reset()
})