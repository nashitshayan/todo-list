import addTodoButton from "./addTodoButton";

export default function renderTodos(currentProject){
    
    let todoArray= currentProject.getAllTodos();
    //console.log(currentProject)
    let todoWrapper= document.querySelector('#todoWrapper');

    todoWrapper.innerHTML='';
    //todoWrapper.removeEventListener("click", (e)=> handleClick(e));
    
    todoArray.forEach(todo=>{
        let todoItem= document.createElement('div');
        todoItem.classList.add('todoItemDisplay');

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
        `
        
        todoWrapper.append(todoItem)
        addTodoButton(todoWrapper);
    })

}