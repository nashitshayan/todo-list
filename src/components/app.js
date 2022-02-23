import { format, addWeeks, addDays} from "date-fns";

let todoArray= [
    {
        id: 1,
        isDone : false,
        title : 'todo-One',
        dueDate: '2022-02-23',
        priority: 'high', 
        category: 'Today', 
    },
    {
        id: 2,
        isDone : false,
        title : 'todo-Two',
        dueDate: '2022-02-24',
        priority: 'high', 
        category: 'Tomorrow', 
    },
    {
        id: 3,
        isDone : false,
        title : 'todo-three ',
        dueDate: '2022-02-23',
        priority: 'low', 
        category: 'Today', 
    },
    {
        id: 4,
        isDone : false,
        title : 'todo-four',
        dueDate: '2022-02-23',
        priority: 'high', 
        category: 'Today', 
    },
    {
        id: 5,
        isDone : false,
        title : 'todo-five',
        dueDate: '2022-02-23',
        priority: 'low', 
        category: 'Today', 
    },
];

const customProjectsArray= [];

const todoFactory= (id,isDone,title, dueDate, priority, category)=>{
    if(!category) category = setCategory(dueDate);
    let newTodo = { id,isDone,title,dueDate,priority, category}
    todoArray.push(newTodo);
    // return newTodo;
}

const changeStatus = (id)=> {
    let targetTodo = todoArray.find(todo=> todo.id===id);
    targetTodo.isDone= targetTodo.isDone===true? false: true;
} 

const changeTitle= (newTitle, id)=>{
    let targetTodo = todoArray.find(todo=> todo.id===id);
    targetTodo.title= newTitle;
}

const changeDueDate= (newDueDate,id)=> {
    let targetTodo = todoArray.find(todo=> todo.id===id);
    targetTodo.dueDate= newDueDate;
 }

const changePriority = (newPriority, index)=> {todoArray[index].priority= newPriority};

const deleteTodo = (id)=>{todoArray=todoArray.filter((todo)=> todo.id!=id)};

const setCategory = (dueDate)=>{
    let currentDate= format(new Date(), 'yyyy-MM-dd');
    let tomorrow= format(addDays(new Date(), 1), 'yyyy-MM-dd');
    let nextWeek = format(addWeeks(new Date(), 1), 'yyyy-MM-dd');
    
    if(dueDate===currentDate) return 'Today';
    if(dueDate===tomorrow) return 'Tomorrow';
    if(dueDate <= nextWeek) return 'This Week'; 

}

const customProjectFactory= (id,title)=>{
    let newProject= {id,title};
    customProjectsArray.push(newProject);
}

const changeProjectTitle= (newTitle,id)=>{
    let targetProject = customProjectsArray.find(project=> project.id===id);
    targetProject.title= newTitle;
}





 export {todoFactory,changeStatus ,changeTitle, changePriority,changeDueDate, deleteTodo, customProjectFactory, changeProjectTitle}
