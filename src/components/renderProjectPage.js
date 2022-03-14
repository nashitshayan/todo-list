import renderTodos from "./renderTodos";
import addTodoButton from "./addTodoButton";

export default function renderProjectPage(currentProject) {
  //grab project heading
  const projectHeading = document.getElementById("projectHeading");
  //give this heading a dataset attribute that corresponds to the current project's id
  projectHeading.dataset.id = currentProject.pId;
  

  //grab the container that holds all the todos
  const todoWrapper = document.getElementById("todoWrapper");


  //update project heading with current project's heading
  projectHeading.textContent = currentProject.pTitle;

  //render all the current project's todo into the todoWrapper
  renderTodos(currentProject);

  //if the todoWrapper is empty, add a 'AddTodo' button
  if (todoWrapper.innerHTML === "") addTodoButton(todoWrapper);
 
}
