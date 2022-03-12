import addTodoButton from "./addTodoButton";

export default function renderTodos(currentProject){
    //grab all the todos in the current project
    let todoArray= currentProject.getAllTodos();
    //console.log(currentProject)
   
    //grab the todoWrapper
    let todoWrapper= document.querySelector('#todoWrapper');

    todoWrapper.innerHTML='';
    //todoWrapper.removeEventListener("click", (e)=> handleClick(e));
    
    //display each todo item

    todoArray.forEach(todo=>{
        let todoItem= document.createElement('div');
        todoItem.classList.add('todoItemDisplay');
        todoItem.dataset.id= todo.id;
        todoItem.innerHTML= `
           
            <div>
                <input class='todoCheckBoxDisplay'type='checkbox' />
                <div class='todoTitleDisplay'>
                ${todo.title}
                </div>
            </div>
            
            <div>
            <div class='todoDueDateDisplay'>
                Due: ${todo.dueDate}
            </div>
            <div class='todoPriorityDisplay'>
                Priority: ${todo.priority}
            </div>
           <div>
           <i id='editTodoBtn' class="fa-solid fa-pencil"></i>
           <i id='deleteTodoBtn' class="fa-solid fa-trash"></i>
           </div></div>
        `
        
        todoWrapper.append(todoItem)
        
    })
    //add a 'addTodo' button at the end
        addTodoButton(todoWrapper);
}