import {format} from 'date-fns';
import { mainAppModule } from './app';
import { v4 as uuidv4 } from 'uuid';

export default function renderDOM(){
    const content = document.createElement('div');
    content.id= 'content';

    const header = document.createElement('div');
    header.id= 'header';

    const aside = document.createElement('div');
    aside.id= 'aside';

    const main = document.createElement('div');
    main.id= 'main';

    const footer = document.createElement('div');
    footer.id= 'footer';

    header.textContent= 'Todo';
    aside.textContent= 'aside';
    aside.style.display = 'none';
    // main.textContent= 'main';
    footer.textContent= 'footer';
    
    const menuBtn= document.createElement('span');
    menuBtn.id= 'menuBtn';
    menuBtn.innerHTML= `<i class="fa-solid fa-bars"></i>`;
    menuBtn.addEventListener('click', ()=> menuToggle(aside, main))


    let todoWrapper= document.createElement('div');
    todoWrapper.id='todoWrapper';
    let addTodo= document.createElement('span');
    addTodo.id='addTodo';
    addTodo.innerHTML= `<i class="fa fa-plus-circle"></i>`
    
    todoWrapper.append(addTodo)

    addTodo.addEventListener('click', makeToDo);

    
    main.append(todoWrapper);
    content.append(header,menuBtn,aside,main,footer);
    return content;
}
/*
1. form pop up
2. on save store todo
3. render
 */

const makeToDo = ()=>{
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

        let saveBtn= document.createElement('span');
        saveBtn.classList.add('saveTodo');
        saveBtn.innerHTML= `
        <i class="fa-solid fa-check tick"></i>
        `

    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('deleteTodo');
    deleteBtn.innerHTML=`
        <i class="fa-solid fa-xmark"></i>    
    `;

    newTodo.append(newTitle, dueDate,priority,saveBtn ,deleteBtn);
    
    /**<input type="checkbox" class="checkbox" >
        
           */
    todoWrapper.insertBefore(newTodo, addTodo);
    console.log();
    
    saveBtn.addEventListener('click',handleSave)
    deleteBtn.addEventListener('click', handleDelete)
}

const handleSave= ()=> {
    console.log('saved')
}
const handleDelete= (e)=>{
    console.log(e.target.parentElement)
}
function menuToggle(aside, main){
    if(aside.style.display==='none')
    { 
        aside.style.display ='block';
        aside.style.gridColumn= '1/  9';
        aside.style.gridRow= '2/  12';
        main.style.gridColumn= '9/ 13';
        main.style.gridRow= '2/   12';
    }
    else{
        aside.style.display ='none';
        main.style.gridColumn= '1/ 13';
        main.style.gridRow= '2/   12';
    }

}

