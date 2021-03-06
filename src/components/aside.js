import { ProjectManager } from "./app";
import { v4 as uuidv4 } from "uuid";
import renderProjects from "./renderProjects";
import addProjectButton from "./addNewProjectBtn";
import renderProjectPage from "./renderProjectPage";
import renderTodos from "./renderTodos";
export default function aside() {
  // make a container to hold all sidebar elements
  const asideDiv = document.createElement("div");
  asideDiv.id = "aside";
  let asideHeading = document.createElement("h3");
  asideHeading.id = "asideHeading";
  asideHeading.textContent = "Projects";
  asideDiv.classList.add('aside', 'aside-toggle');
 


  //make a container to hold custom projects
  let customProjectWrapper = document.createElement("div");
  customProjectWrapper.id = "customProjectWrapper";

  //make an element that will allow users to add new projects
  addProjectButton(customProjectWrapper);

  //event delegation
  customProjectWrapper.addEventListener("click", handleClick);

  
  asideDiv.append(asideHeading, customProjectWrapper);

  return asideDiv;
}

const handleClick = (e) => {
  if (e.target.closest("#addNewProject")) handleAddForm(e.target.closest("#addNewProject"));
  if (e.target.closest("#btnSaveProject")) handleSaveProject(e.target.closest("#btnSaveProject").parentElement.parentElement);
  if (e.target.closest("#btnCancelProject"))handleCancelProjectForm(e.target.closest("#btnCancelProject").parentElement.parentElement);
  if (e.target.closest("#btnEditProject")) handleEditProject(e);
  if (e.target.closest("#btnDeleteProject")) handleDeleteProject(e);
};

const handleEditProject = (e) => {
  //currentTodo dom element
  let currentProjectElement = e.target.closest(".projectTile");
  let projectForm = getProjectForm();
  projectForm.dataset.id = currentProjectElement.dataset.id;

  //the current project's details from our storage
  let currentProjectObject = ProjectManager.getProjectById(
    currentProjectElement.dataset.id
  );
  
  // replace current todo element with a form element
  customProjectWrapper.replaceChild(projectForm, currentProjectElement);
  //and add the current todo's values to it
  setDefaultValues(currentProjectObject);
};

const setDefaultValues = (currentProject) => {
  let projectTitle = document.getElementById("projectFormTitle");
  let projectDescription = document.getElementById("projectFormDescription");
  projectTitle.defaultValue = currentProject.pTitle;
  projectDescription.defaultValue = currentProject.pDescription;
};

const handleDeleteProject = (e) => {
  let currentProjectId = e.target.closest(".projectTile").dataset.id;

  //delete all todos of this project
  ProjectManager.getProjectById(currentProjectId).deleteAllTodos();
  //delete project from ProjectArray in storage
  ProjectManager.deleteProject(currentProjectId);
  //render all remaining projects
  renderProjects();
  //set main content to default
  let todoWrapper = document.querySelector("#todoWrapper");
  todoWrapper.innerHTML = "Add or click on a project.";
  let projectHeading = document.getElementById("projectHeading");
  projectHeading.textContent = "Untitled";
};

const getProjectForm = () => {
  let newProjectFormDiv = document.createElement("div");

  newProjectFormDiv.innerHTML = `
        <input id='projectFormTitle' type='text' placeholder='enter title here'/>
        <input id='projectFormDescription' type='text' placeholder='enter description here'/>
    `;

  let btnWrapper = document.createElement("div");

  let btnSaveProject = document.createElement("button");
  btnSaveProject.textContent = "Save";
  btnSaveProject.id = "btnSaveProject";

  let btnCancelProject = document.createElement("button");
  btnCancelProject.textContent = "Cancel";
  btnCancelProject.id = "btnCancelProject";

  btnWrapper.append(btnSaveProject, btnCancelProject);
  newProjectFormDiv.append(btnWrapper);

  return newProjectFormDiv;
};

const handleAddForm = (addNewProjectDiv) => {
  let newProjectFormDiv = getProjectForm();
  customProjectWrapper.insertBefore(newProjectFormDiv, addNewProjectDiv);
};

const handleSaveProject = (projForm) => {
  let newProjectId = uuidv4();
  let projectTitle = document.getElementById("projectFormTitle").value;
  let projectDescription = document.getElementById(
    "projectFormDescription"
  ).value;

  //if the defaultValue of any input is not empty, that means the form has been edited, so this time just update the values of the current project and call the Render Function
  if (document.getElementById("projectFormTitle").defaultValue != "") {
    let currentProjectId = projForm.dataset.id;
    //update title
    ProjectManager.changeProjectTitle(projectTitle, currentProjectId);
    //update dueDate
    ProjectManager.changeProjectDescription(
      projectDescription,
      currentProjectId
    );
    renderProjectPage(ProjectManager.getProjectById(currentProjectId));
  }
  //add project to the Project Array
  else
    ProjectManager.addProject(newProjectId, projectTitle, projectDescription);
 
  //display the projects
  renderProjects();
 
};

const handleCancelProjectForm = (newProjForm) => {
  //ugh, I'll think of a better solution later (hopefully)
  if (document.getElementById("projectFormTitle").defaultValue != "")
    renderProjects();
  else customProjectWrapper.removeChild(newProjForm);
};
