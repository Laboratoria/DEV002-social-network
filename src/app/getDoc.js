import { database, addDoc, getTask, onSnapshot, getDocs } from './firebase.js';

const saveTask = (title, description) => {
  return addDoc(collection(database , 'tasks'), {title, description })
};

const taskForm = document.getElementById("taskForm")
const taskContainer = document.getElementById('taskContainer')

window.addEventListener("DOMContentLoaded", async () => {
  const querySnapshot = await getTask()
  onSnapshot(collection (database, 'task'),(querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
      <div>
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      </div>
      `;
    });
    taskContainer.innerHTML = html;
  });

  taskForm.addEventListener ('submit', (e) => {
    e.preventDefault()
    const description = taskForm["postsTextArea"]

    console.log(description)

    saveTask(description.value)
    taskForm.reset()
  })
})