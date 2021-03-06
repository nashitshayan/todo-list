import { v4 as uuidv4 } from "uuid";
import { format, parseISO } from "date-fns";
import { ProjectManager } from "./app";
import renderTodos from "./renderTodos";

const getCurrentDate = () => format(new Date(), "yyyy-MM-dd");

export default function main() {
  const mainDiv = document.createElement("div");
  mainDiv.id = "main";

  //default css grid rules for mobile
 // mainDiv.style.gridRow= '2/12';
  mainDiv.classList.add('main');
  let projectHeading = document.createElement("h2");
  projectHeading.id = "projectHeading";
  projectHeading.textContent = "Untitled";

  let todoWrapper = document.createElement("div");
  todoWrapper.id = "todoWrapper";
  todoWrapper.textContent = "Add or click on a project.";

  //event delegation for click events
  todoWrapper.addEventListener("click", handleClick);
  // for change events (form editing)
  //todoWrapper.addEventListener('change', handleChange);

  mainDiv.append(projectHeading, todoWrapper);
  return mainDiv;
}

const handleClick = (e) => {
  //console.log('soime', currentProject.pTitle)
  if (e.target.closest("#addTodo")) handleAddTodo();
  if (e.target.closest(".cancelTodo")) handleCancelTodoForm(e);
  if (e.target.closest(".saveTodo")) handleSave(e);
  if (e.target.closest("#editTodoBtn")) handleEditTodo(e);
  if (e.target.closest("#deleteTodoBtn")) handleDeleteTodo(e);
  if (e.target.closest(".todoCheckBoxDisplay")) handleCheckBox(e);
};

const handleCheckBox = (e) => {
  let currentTodoElement = e.target.closest(".todoItemDisplay");
  //change style
  currentTodoElement.classList.toggle("checked");

  //update status in storage
  let currentProject = getCurrentProject();
  currentProject.changeStatus(currentTodoElement.dataset.id);
};

const handleEditTodo = (e) => {
  /**
     * - for edit-> onclick-> replace current todo element with a form element-> and add the current todo's values to it -> change the values as needed -> each input field having an onchange that updates the todo's values storage by calling the respective functions (changeTitle, changePriority etc)
-> this form element will also have a save and cancel button
-> cancel-> onclick-> revert-> replace the form element back with the original todo element with the same values that were before
-> save-> onclick 
                       -> replace this form element back with the todo element, with the updated values
                       -> OR, just call render function that'll render all the todos again (since the todo will have it's updated values in the storage, on re rendering all todos, the updated todo should get rendered. But I'm assuming this is a costly operation, idk.

     */
  //currentTodo dom element
  let currentTodoElement = e.target.closest(".todoItemDisplay");
  let todoForm = getTodoForm();
  todoForm.dataset.id = currentTodoElement.dataset.id;
  let currentProject = getCurrentProject();
  //the current todo's details from our storage
  let currentTodoObject = currentProject.getTodoById(
    currentTodoElement.dataset.id
  );

  // replace current todo element with a form element
  todoWrapper.replaceChild(todoForm, currentTodoElement);
  //and add the current todo's values to it
  setDefaultValues(currentTodoObject);
};

const setDefaultValues = (cuurrentTodo) => {
  let todoTitle = document.getElementById("todoFormTitle");
  // let todoDueDate = document.getElementById("todoFormDueDate");
  let todoPriority = document.getElementById("todoFormPriority");
  todoTitle.defaultValue = cuurrentTodo.title;
  // todoDueDate.defaultValue= format(new Date(cuurrentTodo.dueDate), 'yyyy-MM-dd');
  console.log(parseISO(cuurrentTodo.dueDate));
  Array.from(todoPriority.options).forEach((option) => {
    if (option.value === cuurrentTodo.priority) option.selected = true;
  });
};

const handleDeleteTodo = (e) => {
  /*
    - delete is pretty simple -> onclick-> delete todo from main storage-> re-rendered all todos */
  let currentTodoId = e.target.closest(".todoItemDisplay").dataset.id;
  let currentProject = getCurrentProject();

  //delete todo from todoArray in storage
  currentProject.deleteTodo(currentTodoId);
  //render all remaining todos
  renderTodos(currentProject);
};

const getTodoForm = () => {
  let currentDate = getCurrentDate();

  //create a wrapper to hold all input fields.
  let newTodo = document.createElement("div");
  newTodo.classList.add("todoItemWrapper");
 

  let newTitle = document.createElement("div");
  newTitle.innerHTML = `
    <input id='todoFormTitle' type='text' placeholder='type here...'> `;
  let dueDate = document.createElement("div");
  dueDate.innerHTML = `<input id='todoFormDueDate' type="date" class="dueDate" min=${currentDate}>`;

  let priority = document.createElement("div");
  priority.innerHTML = `
        <select id='todoFormPriority' name="todoPriority" class="todoPriority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        `;

  let btnWrapper = document.createElement("div");
  let saveBtn = document.createElement("i");
  saveBtn.classList.add("saveTodo", "fa-solid", "fa-check", "tick");

  let cancelBtn = document.createElement("i");
  cancelBtn.classList.add("cancelTodo", "fa-solid", "fa-xmark");

  btnWrapper.append(saveBtn, cancelBtn);
  newTodo.append(newTitle, dueDate, priority, btnWrapper);
  return newTodo;
};

const handleAddTodo = () => {
  let newTodo = getTodoForm();
  todoWrapper.insertBefore(newTodo, addTodo);
};

const handleCancelTodoForm = (e) => {
  let todoItem = e.target.closest(".todoItemWrapper");

  if (document.getElementById("todoFormTitle").defaultValue != "") {
    //ugh, I'll think of a better solution later (hopefully)
    renderTodos(getCurrentProject());
  } else todoWrapper.removeChild(todoItem);
  //.log(todoWrapper, todoItem)
};

const handleSave = (e) => {
  let todoForm = e.target.closest(".todoItemWrapper");
  let currentProject = getCurrentProject();
  let newTodoId = uuidv4();
  let todoTitle = document.getElementById("todoFormTitle").value;
  let todoDueDate = document.getElementById("todoFormDueDate").value;
  let todoPriorityElement = document.getElementById("todoFormPriority");
  let todoPriority =
    todoPriorityElement.options[todoPriorityElement.selectedIndex].text;

  //if the defaultValue of any input is not empty, that means the form has been edited, so this time just update the values of the current todo and call the Render Function
  if (document.getElementById("todoFormTitle").defaultValue != "") {
    let currentTodoId = todoForm.dataset.id;
    //update title
    currentProject.changeTitle(todoTitle, currentTodoId);
    //update dueDate
    currentProject.changeDueDate(todoDueDate, currentTodoId);
    //update Priority
    currentProject.changePriority(todoPriority, currentTodoId);
  }
  //other wise add a new todo and render
  else
    currentProject.addTodo(
      newTodoId,
      false,
      todoTitle,
      todoDueDate,
      todoPriority
    );

  renderTodos(currentProject);
};

const getCurrentProject = () => {
  let projectHeading = document.getElementById("projectHeading");
  let pId = projectHeading.dataset.id;

  return ProjectManager.getProjectById(pId);
};

