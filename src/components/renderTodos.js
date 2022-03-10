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
           
            <input class='todoCheckBoxDisplay'type='checkbox' />
            
            <div class='todoTitleDisplay'>
                ${todo.title}
            </div>
            <div class='todoDueDateDisplay'>
                DueDate: ${todo.dueDate}
            </div>
            <div class='todoPriorityDisplay'>
                Priority: ${todo.priority}
            </div>
            <i id='editTodoBtn' class="fa-solid fa-pencil"></i>
            <i id='deleteTodoBtn' class="fa-solid fa-trash"></i>
        `
        
        todoWrapper.append(todoItem)
        
    })
    //add a 'addTodo' button at the end
        addTodoButton(todoWrapper);
}