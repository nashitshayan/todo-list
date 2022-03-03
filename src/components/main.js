import { v4 as uuidv4 } from 'uuid';
import {format} from 'date-fns';
import { ProjectManager } from './app';
import renderTodos from './renderTodos';

const getCurrentDate = ()=> format(new Date(), 'yyyy-MM-dd');

export default function main(){
    const mainDiv = document.createElement('div');
    mainDiv.id= 'main';
    
    let projectHeading= document.createElement('h2');
    projectHeading.id= 'projectHeading';
    projectHeading.textContent= 'Untitled';

    let todoWrapper= document.createElement('div');
    todoWrapper.id='todoWrapper';

    //event delegation
    todoWrapper.addEventListener("click", (e)=> handleClick(e));

    mainDiv.append(projectHeading, todoWrapper)
    return mainDiv;
}


const handleClick= (e)=>{
    //console.log('soime', currentProject.pTitle)
    if(e.target.closest('#addTodo')) handleAddTodo();
    if(e.target.closest('.deleteTodo')) handleCancelTodoForm(e);
    if(e.target.closest('.saveTodo')) handleSave();

}


const handleAddTodo = ()=>{
    
    let currentDate= getCurrentDate();
    
    //create a wrapper to hold all input fields. 
    let newTodo= document.createElement('div');
    newTodo.classList.add('todoItemWrapper')
    //STYLE NEEDS UPDATE
    newTodo.style.backgroundColor='red';
    
    let newTitle = document.createElement('span');
    newTitle.innerHTML=`
    <input id='todoTitle' type='text' placeholder='type here...'>
        `;
    let dueDate = document.createElement('span');
    dueDate.innerHTML=`
    <input id='todoDueDate' type="date" class="dueDate" min=${currentDate}>
        `;
    
    let priority= document.createElement('span');
    priority.innerHTML= `
        <select id='todoPriority' name="todoPriority" class="todoPriority">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
        `;

    let saveBtn= document.createElement('i');
    saveBtn.classList.add('saveTodo', 'fa-solid', 'fa-check','tick');
    

    let cancelBtn = document.createElement('i');
    cancelBtn.classList.add('deleteTodo', 'fa-solid' ,'fa-xmark');
    

    newTodo.append(newTitle, dueDate,priority,saveBtn ,cancelBtn);
    todoWrapper.insertBefore(newTodo, addTodo);

}


const handleCancelTodoForm= (e)=>{
    let todoWrapper= e.target.closest('#todoWrapper')
    let todoItem= e.target.closest('.todoItemWrapper')
    todoWrapper.removeChild(todoItem);
    //.log(todoWrapper, todoItem)
}


const handleSave= ()=> {
    let currentProject= getCurrentProject();
   // console.log('saved', currentProject.pTitle)
    let newTodoId= uuidv4();
    let todoTitle = document.getElementById('todoTitle').value;
    let todoDueDate = document.getElementById('todoDueDate').value;
    let todoPriorityElement = document.getElementById('todoPriority');
    let todoPriority= todoPriorityElement.options[todoPriorityElement.selectedIndex].text;


    currentProject.addTodo(newTodoId, false, todoTitle, todoDueDate, todoPriority)
    renderTodos(currentProject);
   // console.log(currentProject.getAllTodos())

}


const getCurrentProject =()=>{
    //console.log('cuurent projh')
    let projectHeading= document.getElementById('projectHeading');
    let pId= projectHeading.dataset.id;

    return ProjectManager.getProjectById(pId)
}

//getCurrentProject();