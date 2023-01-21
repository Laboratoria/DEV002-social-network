//import { async } from 'regenerator-runtime';
import { saveTask, getTasks, onSnapshot, collection, db} from './configuracion.js'

const tasksContainer = document.getElementById('contenedor-publicaciones');
const taskForm = document.getElementById('task-form');


window.addEventListener('DOMContentLoaded', async () =>{
        onSnapshot(collection(db, 'tasks'), (querySnapshot)=>{

            let html = ''

            querySnapshot.forEach(doc => {
                const task = doc.data()
                html += ` 
                <div> 
                    <p>${task.description}</p>
                </div>
                `;
            }); 
            tasksContainer.innerHTML = html;
        })
});



taskForm.addEventListener('submit', (e)=>{
    e.preventDefault()

   const description = taskForm['task-description'];
   
   saveTask(description.value)

   taskForm.reset()
})