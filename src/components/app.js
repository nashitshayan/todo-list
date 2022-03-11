import { format} from "date-fns";
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



const ProjectFactory= (pId,pTitle, pDescription)=>{
    //local array that will store each project's todos
    let todoArray= [];

    //function getProjectDetails(){return {pId,title,description}}

    //search for a particular todo in the todo array
    const findTodo = (todoArr,id)=>{
        return todoArr.find(todo=> todo.id===id);
    }
    
    //create new todos
    const addTodo = (id,isDone,title,dueDate, priority)=>{
        let newTodo= TodoFactory(id,isDone,title,dueDate, priority);
        todoArray.push(newTodo);
    }


    //read todos
    const getAllTodos= ()=>  todoArray;
    const getTodoById= (id)=> findTodo(todoArray,id);
    

    //update todo details
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


    //delete
    const deleteTodo = (id)=>{todoArray=todoArray.filter((todo)=> todo.id!=id)};

    return {
        pId,pTitle,pDescription,addTodo,getAllTodos, getTodoById,changeStatus ,changeTitle, changeDueDate, changePriority, deleteTodo
    }
}


const ProjectManager = (()=>{
    //the array to hold all projects
    let projectArray= [];

    //search for a particular project
    const findProject = (projectArr,id)=>{
     return (projectArr.find(project=> project.pId===id));
    }
    

    //create a new project
    const addProject = (id,title='Untitled', description= 'No Description')=>{
        let newProject= ProjectFactory(id,title,description);
        projectArray.push(newProject);
    }


    //read projects
    const getAllProjects= ()=> projectArray;
    const getProjectById= (id)=>findProject(projectArray, id);


    //update project details
    const changeProjectTitle= (newTitle,id)=>{
        let targetProject= findProject(projectArray,id);
        targetProject.pTitle= newTitle;
    }

    const changeProjectDescription= (newDescription, id)=>{
        let targetProject= findProject(projectArray,id);
        targetProject.pDescription= newDescription;
    }

    
    //delete  project
    const deleteProject = (pId)=>{projectArray=projectArray.filter((project)=> project.pId!=pId)};

    const setLocalStorage= ()=>{
        window.localStorage.setItem('myProjects', JSON.stringify(projectArray))
    }

    return {
        addProject, getAllProjects, getProjectById, changeProjectDescription, changeProjectTitle, deleteProject, setLocalStorage
    }

})();


export  {ProjectManager};

ProjectManager.addProject('1', 'work', 'webdev');
//  ProjectManager.addProject(2, 'read', 'docs');
 // console.log(ProjectManager.getProjectById(1));
 let projectArr= ProjectManager.getAllProjects();
 projectArr[0].addTodo('1',false,'work on app','2022-02-28', 'high');
 projectArr[0].addTodo('2',false,'todo_TWO','2022-03-28', 'low');
 projectArr[0].addTodo('3',false,'TODO_THREE','2022-04-28', 'medium');
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

