//import { v4 as uuidv4 } from 'uuid';
//import {format} from 'date-fns';
import renderTodos from "./renderTodos";
import addTodoButton from "./addTodoButton";

export default function renderProjectPage(currentProject) {
  //grab project heading
  const projectHeading = document.getElementById("projectHeading");
  //give this heading a dataset attribute that corresponds to the current project's id
  projectHeading.dataset.id = currentProject.pId;
  //const main= document.getElementById('main');

  //grab the container that holds all the todos
  const todoWrapper = document.getElementById("todoWrapper");
  // todoWrapper.innerHTML='';

  //update project heading with current project's heading
  projectHeading.textContent = currentProject.pTitle;

  //render all the current project's todo into the todoWrapper
  renderTodos(currentProject);

  //if the todoWrapper is empty, add a 'AddTodo' button
  if (todoWrapper.innerHTML === "") addTodoButton(todoWrapper);
  // if (!todoWrapper.classList.contains("click-handler")) {
  //     todoWrapper.classList.add("click-handler");
  //     todoWrapper.addEventListener("click", (e)=> handleClick(e));
  // }
  // todoWrapper.addEventListener('click', (e)=> handleClick(project,e))
  //    const handleClick= (e)=>{
  //     console.log('soime', currentProject.pTitle)
  //     if(e.target.closest('#addTodo')) handleAddTodo();
  //     if(e.target.closest('.deleteTodo')) handleCancelTodoForm(e);
  //     if(e.target.closest('.saveTodo')) handleSave(currentProject);

  // }

  //main.append(todoWrapper);
}

// const addTodoButton = (todoWrapper)=>{
//     let addTodo= document.createElement('button');
//     addTodo.id='addTodo';
//     addTodo.innerHTML= `<i class="fa-solid fa-plus"></i>`
//     //addTodo.classList.add('fa', 'fa-plus-circle')
//     todoWrapper.append(addTodo)
// }

// const handleSave= (currentProject)=> {
//     console.log('saved', currentProject.pTitle)
//     let newTodoId= uuidv4();
//     let todoTitle = document.getElementById('todoTitle').value;
//     let todoDueDate = document.getElementById('todoDueDate').value;
//     let todoPriorityElement = document.getElementById('todoPriority');
//     let todoPriority= todoPriorityElement.options[todoPriorityElement.selectedIndex].text;

//     currentProject.addTodo(newTodoId, false, todoTitle, todoDueDate, todoPriority)
//     renderTodos(currentProject);

// }

// const handleAddTodo = ()=>{

//     let currentDate= format(new Date(), 'yyyy-MM-dd');

//     let newTodo= document.createElement('div');
//     newTodo.classList.add('todoItemWrapper')
//     newTodo.style.backgroundColor='red';

//     let newTitle = document.createElement('span');
//     newTitle.innerHTML=`
//     <input id='todoTitle' type='text' placeholder='type here...'>
//         `;
//     let dueDate = document.createElement('span');
//     dueDate.innerHTML=`
//     <input id='todoDueDate' type="date" class="dueDate" min=${currentDate}>
//         `;

//     let priority= document.createElement('span');
//     priority.innerHTML= `
//         <select id='todoPriority' name="todoPriority" class="todoPriority">
//             <option value="low">low</option>
//             <option value="medium">medium</option>
//             <option value="high">high</option>
//         </select>
//         `;

//     let saveBtn= document.createElement('i');
//     saveBtn.classList.add('saveTodo', 'fa-solid', 'fa-check','tick');

//     let deleteBtn = document.createElement('i');
//     deleteBtn.classList.add('deleteTodo', 'fa-solid' ,'fa-xmark');

//     newTodo.append(newTitle, dueDate,priority,saveBtn ,deleteBtn);
//     todoWrapper.insertBefore(newTodo, addTodo);

// }

// const handleCancelTodoForm= (e)=>{
//     let todoWrapper= e.target.closest('#todoWrapper')
//     let todoItem= e.target.closest('.todoItemWrapper')
//     todoWrapper.removeChild(todoItem);
//     console.log(todoWrapper, todoItem)
// }

// const renderTodos= (currentProject)=>{
//     let todoArray= currentProject.getAllTodos();
//     console.log(currentProject)
//     let todoWrapper= document.querySelector('#todoWrapper');

//     todoWrapper.innerHTML='';
//     todoWrapper.removeEventListener("click", (e)=> handleClick(e));
//     todoArray.forEach(todo=>{
//         let todoItem= document.createElement('div');
//         todoItem.classList.add('todoItemDisplay');

//         todoItem.innerHTML= `

//             <input class='todoCheckBoxDisplay'type='checkbox' />

//             <div class='todoTitleDisplay'>
//                 ${todo.title}
//             </div>
//             <div class='todoDueDateDisplay'>
//                 DueDate: ${todo.dueDate}
//             </div>
//             <div class='todoPriorityDisplay'>
//                 Priority: ${todo.priority}
//             </div>
//         `

//         todoWrapper.append(todoItem)
//         addTodoButton(todoWrapper);
//     })

// }
