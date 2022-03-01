import { v4 as uuidv4 } from 'uuid';
import {format} from 'date-fns';


export default function renderProject(project){
    const projectHeading= document.getElementById('projectHeading');
    const main= document.getElementById('main');
    const todoWrapper= document.getElementById('todoWrapper');
    todoWrapper.innerHTML='';


    projectHeading.textContent= project.pTitle;

    
    let addTodo= document.createElement('button');
    addTodo.id='addTodo';
    addTodo.innerHTML= `<i class="fa-solid fa-plus"></i>`
    //addTodo.classList.add('fa', 'fa-plus-circle')
    
    
    todoWrapper.append(addTodo)
    
    todoWrapper.addEventListener('click', handleClick)
    // addTodo.addEventListener('click', );
    main.append(todoWrapper);
}

const handleClick= (e)=>{
    console.log(e.target)
    if(e.target.id==='addTodo') handleAddTodo();
    if(e.target.classList.contains('deleteTodo')) handleCancelTodoForm(e);
    if(e.target.classList.contains('saveTodo')) handleSave(e);

}

const handleAddTodo = ()=>{
    let newTodoId= uuidv4();
    let currentDate= format(new Date(), 'yyyy-MM-dd');
    let newTodo= document.createElement('div');
    newTodo.classList.add('todoItemWrapper')
    newTodo.style.backgroundColor='red';
    
    newTodo.dataset.id= newTodoId;

    // let checkboxDiv= document.createElement('span')
    // checkboxDiv.innerHTML= `
    //     <input type="checkbox" id="checklist" >
    //     `
    let newTitle = document.createElement('span');
    newTitle.innerHTML=`
    <input type='text' placeholder='type here...'>
        `;
    let dueDate = document.createElement('span');
    dueDate.innerHTML=`
    <input type="date" class="dueDate" min=${currentDate}>
        `;
    
    let priority= document.createElement('span');
    priority.innerHTML= `
        <select name="todoPriority" class="todoPriority">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
        `;

    let saveBtn= document.createElement('i');
    saveBtn.classList.add('saveTodo', 'fa-solid', 'fa-check','tick');
    

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('deleteTodo', 'fa-solid' ,'fa-xmark');
    

    newTodo.append(newTitle, dueDate,priority,saveBtn ,deleteBtn);
    
    /**<input type="checkbox" class="checkbox" >
        
           */
    todoWrapper.insertBefore(newTodo, addTodo);
 
    
   // saveBtn.addEventListener('click',handleSave)
    //deleteBtn.addEventListener('click', handleCancelTodoForm)
}

const handleSave= (e)=> {
    console.log('saved')
}

const handleCancelTodoForm= (e)=>{
    let todoWrapper= e.target.parentElement.parentElement;
    let todoItem= e.target.parentElement;
    todoWrapper.removeChild(todoItem);
    console.log(todoWrapper, todoItem)
    //todoWrapper.removeChild();
}