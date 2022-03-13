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
        //if the todo's status is checked, add the checked style
        let isChecked=''; //this variable is set empty, if todo is checked, this will be changed to 'checked'. This will be used in the input checkbox to have it checked on reload
        if(todo.isDone){ 
            todoItem.classList.add('checked');
            isChecked= 'checked';
        }
        
       
        todoItem.innerHTML= `
           
            <div>
                <label class="checkbox-control">
                    <input class='todoCheckBoxDisplay'type='checkbox' ${isChecked} />
                </label>
                <div class='todoTitleDisplay'>
                ${todo.title}
                </div>
            </div>
            
            <div class='todoDetailsWrapper'>
                <div class='todoDueDateDisplay'>
                    Due: ${todo.dueDate}
                </div>
                <div class='todoPriorityDisplay'>
                    Priority: ${todo.priority}
                </div>
                <div>
                    <i id='editTodoBtn' class="fa-solid fa-pencil"></i>
                    <i id='deleteTodoBtn' class="fa-solid fa-trash"></i>
                </div>
            </div>
        `
        
        todoWrapper.append(todoItem)
      
        
    })
    //add a 'addTodo' button at the end
        addTodoButton(todoWrapper);
}