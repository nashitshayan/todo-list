import { format, addWeeks, addDays} from "date-fns";
let currentDate= format(new Date(), 'yyyy-MM-dd');

const TodoFactory= (id, isDone='false',title='Untitled', dueDate= currentDate, priority='low')=>{

    return {id,isDone,title,dueDate,priority};
}
// let todoArray= [
//     {
//         id: 1,
//         isDone : false,
//         title : 'todo-One',
//         dueDate: '2022-02-23',
//         priority: 'high', 
//         category: 'Today', 
//     },
//     {
//         id: 2,
//         isDone : false,
//         title : 'todo-Two',
//         dueDate: '2022-02-24',
//         priority: 'high', 
//         category: 'Tomorrow', 
//     },
//     {
//         id: 3,
//         isDone : false,
//         title : 'todo-three ',
//         dueDate: '2022-02-23',
//         priority: 'low', 
//         category: 'Today', 
//     },
//     {
//         id: 4,
//         isDone : false,
//         title : 'todo-four',
//         dueDate: '2022-02-23',
//         priority: 'high', 
//         category: 'Today', 
//     },
//     {
//         id: 5,
//         isDone : false,
//         title : 'todo-five',
//         dueDate: '2022-02-23',
//         priority: 'low', 
//         category: 'Today', 
//     },
// ];



const ProjectFactory= (pId,title, description)=>{
    let todoArray= [];

    function getProjectDetails(){return {pId,title,description}}


    const findTodo = (todoArray,id)=>{
        return todoArray.find(todo=> todo.id===id);
    }
    
    const addTodo = (id,isDone,title,dueDate, priority)=>{
        let newTodo= TodoFactory(id,isDone,title,dueDate, priority);
        todoArray.push(newTodo);
    }

    const getAllTodos= ()=>  todoArray;

    const getTodoById= (id)=> findTodo(todoArray,id);
    const changeStatus = (id)=> {
        let targetTodo = findTodo(todoArray,id);
        targetTodo.isDone= targetTodo.isDone===true? false: true;
    } 

    const changeTitle= (newTitle, id)=>{
        let targetTodo = findTodo(todoArray,id);
        targetTodo.title= newTitle;
    }

    const changeDueDate= (newDueDate,id)=> {
        let targetTodo = findTodo(todoArray,id);
        targetTodo.dueDate= newDueDate;
    }

    const changePriority = (newPriority, id)=> {
        let targetTodo = findTodo(todoArray,id);
        targetTodo.priority= newPriority;    
    };

    const deleteTodo = (id)=>{todoArray=todoArray.filter((todo)=> todo.id!=id)};

    return {
        getProjectDetails,addTodo,getAllTodos, getTodoById,changeStatus ,changeTitle, changeDueDate, changePriority, deleteTodo
    }
}

const ProjectManager = (()=>{
    const projectArray= [];

    const findProject = (projectArray,id)=>{
        return projectArray.find(project=> project.id===id);
    }
    
    const addProject = (id,title='Untitled', description= 'No Description')=>{
        let newProject= ProjectFactory(id,title,description);
        projectArray.push(newProject);
    }

    const getAllProjects= ()=> projectArray;

    const getProjectById= (id)=> findProject(projectArray, id);

    const changeProjectTitle= (newTitle,id)=>{
        let targetProject= findProject(projectArray,id);
        targetProject.title= newTitle;
    }

    const changeProjectDescription= (newDescription, id)=>{
        let targetProject= findProject(projectArray,id);
        targetProject.description= newDescription;
    }

    return {addProject, getAllProjects, getProjectById, changeProjectDescription, changeProjectTitle}

})();

// ProjectManager.addProject(1, 'work', 'webdev');
// let projectArr= ProjectManager.getAllProjects();
// projectArr[0].addTodo(2,false,'work on app','2022-02-28', 'high');
// console.log(projectArr[0].getAllTodos())

// console.log(p1)
// let p1= ProjectFactory('Work', 'working on todoApp');
// p1.addTodo(2,false,'work on app','2022-02-28', 'high');

// p1.changeStatus(2);
// p1.changeDueDate('2022-03-01', 2)
// p1.changePriority('medium',2)
// p1.changeTitle('new title',2)
// p1.deleteTodo(2)


// console.log(p1.getProjectDetails())

// const mainAppModule= (()=>{
    // let todoArray= [
    //     {
    //         id: 1,
    //         isDone : false,
    //         title : 'todo-One',
    //         dueDate: '2022-02-23',
    //         priority: 'high', 
    //         category: 'Today', 
    //     },
    //     {
    //         id: 2,
    //         isDone : false,
    //         title : 'todo-Two',
    //         dueDate: '2022-02-24',
    //         priority: 'high', 
    //         category: 'Tomorrow', 
    //     },
    //     {
    //         id: 3,
    //         isDone : false,
    //         title : 'todo-three ',
    //         dueDate: '2022-02-23',
    //         priority: 'low', 
    //         category: 'Today', 
    //     },
    //     {
    //         id: 4,
    //         isDone : false,
    //         title : 'todo-four',
    //         dueDate: '2022-02-23',
    //         priority: 'high', 
    //         category: 'Today', 
    //     },
    //     {
    //         id: 5,
    //         isDone : false,
    //         title : 'todo-five',
    //         dueDate: '2022-02-23',
    //         priority: 'low', 
    //         category: 'Today', 
    //     },
    // ];
//     let customProjectsArray= [];



// const setCategory = (dueDate)=>{
    
//     let tomorrow= format(addDays(new Date(), 1), 'yyyy-MM-dd');
//     let nextWeek = format(addWeeks(new Date(), 1), 'yyyy-MM-dd');
    
//     if(dueDate===currentDate) return 'Today';
//     if(dueDate===tomorrow) return 'Tomorrow';
//     if(dueDate <= nextWeek) return 'This Week'; 

// }





// return {
//     todoFactory,
//     changeStatus,
//     changeTitle,
//     changePriority,
//     changeDueDate,
//     deleteTodo,
//     customProjectFactory,
//     changeProjectTitle
// }
// })();

// export {mainAppModule}
