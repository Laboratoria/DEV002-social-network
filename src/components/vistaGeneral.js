import { onNavigate } from "../main.js";
import { saveTask , getTasks } from "../lib/firebase/muroFir.js";

export const vistaGeneral = () => {
    const homeDiv = document.createElement('div');
    const navFijo = document.createElement('nav');
    const tituloFijo = document.createElement('h2');
    const formMuro = document.createElement('form'); 
    const labelTitle = document.createElement('label');
    const inpuText = document.createElement('input');
    const labelDescrip = document.createElement('label');
    const textArea = document.createElement('textarea');
    const buttonGuardar = document.createElement('button');
    const divContainer = document.createElement('div');

    navFijo.className = 'navFijo';
    tituloFijo.className = 'nameFijo';
    formMuro.className = 'task-form';
    labelTitle.className = 'labelTitle';
    inpuText.className = 'inpuText';
    labelDescrip.className = 'labelDescrip';
    textArea.className = 'textArea';
    buttonGuardar.className = 'buttonGuardar';
    divContainer.className = 'divContainer';

    formMuro.id = 'task-form';
    inpuText.id = 'inpuText';
    textArea.id = 'task-description';
    buttonGuardar.id = 'btn-task-save';
    divContainer.id = 'tasks-container';
    
    document.getElementById('task-form');

    inpuText.type = 'text';

    inpuText.placeholder = 'Task Title';
    textArea.placeholder = 'Task Description';

    labelTitle.for = 'title';
    labelDescrip.for = 'description';

    textArea.rows = '3';

    tituloFijo.textContent = "¿Que comemos hoy?";
    labelTitle.textContent = "Title:";
    labelDescrip.textContent = "Description";
    buttonGuardar.textContent = "Save";

    formMuro.addEventListener('submit', (e) =>{
        e.preventDefault()

        const title = formMuro['inpuText']
        const description = formMuro['task-description']

        saveTask(title.value, description.value)

        formMuro.reset()
    })

    homeDiv.appendChild(navFijo);
    navFijo.appendChild(tituloFijo);
    homeDiv.appendChild(formMuro);
    formMuro.appendChild(labelTitle);
    formMuro.appendChild(inpuText);
    formMuro.appendChild(labelDescrip);
    formMuro.appendChild(textArea);
    formMuro.appendChild(buttonGuardar);
    homeDiv.appendChild(divContainer);

    return homeDiv;
}