
function createTodo(title, description,dueDate,priority,checklist){
    return {title,description,dueDate,priority,checklist};
}

 const markComplete = (status)=> !status; 

//  const changePriority = (newPriority)=> 


 export {createTodo,markComplete }