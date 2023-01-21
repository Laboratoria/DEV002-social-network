//import { async } from 'regenerator-runtime';
import { saveTask, getTasks, onGetTasks, deleteTask, getTask} from './configuracion.js'

const tasksContainer = document.getElementById('contenedor-publicaciones');
const taskForm = document.getElementById('task-form');

let editStatus = false;

window.addEventListener('DOMContentLoaded', async () =>{
        onGetTasks((querySnapshot) => {
        let html = ''

            querySnapshot.forEach(doc => {
                const task = doc.data()
                html += ` 
                <div> 
                    <p>${task.description}</p>
                    <button class='btn-delete' data-id="${doc.id}"> Delete </button>
                    <button class='btn-edit' data-id="${doc.id}"> Edit </button>

                </div>
                `;
            }); 
            
        tasksContainer.innerHTML = html;
        
    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
    btnsDelete.forEach(btn => {
        btn.addEventListener('click',({target: { dataset }}) => {
            deleteTask(dataset.id)
         })
    })

    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit')
    btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            const doc = await getTask(e.target.dataset.id)
            console.log(doc.data())
            const task = doc.data() 

            taskForm['task-description'].value = task.description
            editStatus = true
            })
        })
    });
});

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

   const description = taskForm['task-description'];
    
   if(editStatus) {
        console.log('updating')
    }else {
        saveTask(description.value);

    }

   taskForm.reset()
})