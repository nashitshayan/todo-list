import { format, parseISO } from "date-fns";
let currentDate = format(new Date(), "yyyy-MM-dd");
const formatDueDate = (dueDate) => format(new Date(dueDate), "do MMMM yyyy");

const TodoFactory = (
  id,
  isDone = "false",
  title = "Untitled",
  dueDate = currentDate,
  priority = "low"
) => {
  dueDate = formatDueDate(dueDate);
  return { id, isDone, title, dueDate, priority };
};

const ProjectFactory = (pId, pTitle, pDescription) => {
  
  //local array that will store each project's todos
  //if a project's todo array exists in the local storage, then that will become the todoArray where all operations will take place, otherwise it'll be an empty array.
  let todoArray = localStorage[pTitle]
    ? JSON.parse(localStorage.getItem(pId))
    : [];

  //this function is called everytime a change is made to the todoarray, it updates the project's todoArray in the localstorage
  const setTodosLocalStorage = () => {
    window.localStorage.setItem(pId, JSON.stringify(todoArray));
  };
 
  //search for a particular todo in the todo array
  const findTodo = (id) => {
    return todoArray.find((todo) => todo.id === id);
  };

  //create new todos
  const addTodo = (id, isDone, title, dueDate, priority) => {
    let newTodo = TodoFactory(id, isDone, title, dueDate, priority);
    todoArray.push(newTodo);
    setTodosLocalStorage();
  };

  //read todos
  const getAllTodos = () => todoArray;
  const getTodoById = (id) => findTodo(id);

  //update todo details
  const changeStatus = (id) => {
    let targetTodo = findTodo(id);
    targetTodo.isDone = targetTodo.isDone === true ? false : true;
    setTodosLocalStorage();
  };

  const changeTitle = (newTitle, id) => {
    let targetTodo = findTodo(id);
    targetTodo.title = newTitle;
    setTodosLocalStorage();
  };

  const changeDueDate = (newDueDate, id) => {
    let targetTodo = findTodo(id);
    targetTodo.dueDate = formatDueDate(newDueDate);
    setTodosLocalStorage();
  };

  const changePriority = (newPriority, id) => {
    let targetTodo = findTodo(id);
    targetTodo.priority = newPriority;
    setTodosLocalStorage();
  };

  //delete
  const deleteTodo = (id) => {
    todoArray = todoArray.filter((todo) => todo.id != id);
    setTodosLocalStorage();
  };

  const deleteAllTodos = () => {
    todoArray = [];
    window.localStorage.removeItem(pId);
  };

  return {
    pId,
    pTitle,
    pDescription,
    addTodo,
    getAllTodos,
    getTodoById,
    changeStatus,
    changeTitle,
    changeDueDate,
    changePriority,
    deleteTodo,
    deleteAllTodos,
  };
};

//localStorage.clear();

const ProjectManager = (() => {
  //the array to hold all projects
  let projectArray = [];

  //if there are no projects in local storage, then keep this array empty, otherwise fill it up with projects and their functions
  if (localStorage.myProjects) {
    //grab the projects array from local storage, which will basically be an array of objects, each object will have the Project ID, title and description. We will then grab these three details for each project and call our Project Factory function. The return value will be an object that has our project details (pId, pTitle, pDescription), along with all the necessary functions to manage each project's todos. We will then add this object to the projectArray, which will be initially empty.
    let projectArrayWithoutFunctions = JSON.parse(
      localStorage.getItem("myProjects")
    );
    projectArrayWithoutFunctions.forEach((project) => {
      let newProject = ProjectFactory(
        project.pId,
        project.pTitle,
        project.pDescription
      );
      projectArray.push(newProject);
    });
   
  }

  //search for a particular project
  const findProject = (projectArr, id) => {
    return projectArr.find((project) => project.pId === id);
  };

  //set to localstorage
  const setProjectLocalStorage = () => {
    window.localStorage.setItem("myProjects", JSON.stringify(projectArray));
  };

  //create a new project
  const addProject = (
    id,
    title = "Untitled",
    description = "No Description"
  ) => {
    let newProject = ProjectFactory(id, title, description);
    projectArray.push(newProject);
    setProjectLocalStorage();
  };

  //read projects
  const getAllProjects = () => projectArray;
  const getProjectById = (id) => findProject(projectArray, id);

  //update project details
  const changeProjectTitle = (newTitle, id) => {
    let targetProject = findProject(projectArray, id);
    targetProject.pTitle = newTitle;
    setProjectLocalStorage();
  };

  const changeProjectDescription = (newDescription, id) => {
    let targetProject = findProject(projectArray, id);
    targetProject.pDescription = newDescription;
    setProjectLocalStorage();
  };

  //delete  project
  const deleteProject = (pId) => {
    projectArray = projectArray.filter((project) => project.pId != pId);
    setProjectLocalStorage();
  };

  return {
    addProject,
    getAllProjects,
    getProjectById,
    changeProjectDescription,
    changeProjectTitle,
    deleteProject,
  };
})();

export { ProjectManager };
