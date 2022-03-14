import { ProjectManager } from "./app";
import addProjoectButton from "./addNewProjectBtn";
import renderProjectPage from "./renderProjectPage";
import menuToggle from "./menuToggle";

export default function renderProjects() {
  //grab all the projects
  let projectsArray = ProjectManager.getAllProjects();
  console.log(projectsArray);
  //grab the projetWrapper
  let customProjectWrapper = document.getElementById("customProjectWrapper");

  customProjectWrapper.innerHTML = "";

  //display each project
  projectsArray.forEach((project) => {
    let projectTile = document.createElement("div");
    projectTile.classList.add("projectTile");
    projectTile.dataset.id = project.pId;
    projectTile.innerHTML = `
        <div class='projectTitle'>${project.pTitle}</div>
        <div class='projectDescription'>${project.pDescription}</div>
        <i id='btnEditProject' class="fa-solid fa-pencil"></i>
        <i id='btnDeleteProject' class="fa-solid fa-trash"></i>
      `;

    customProjectWrapper.append(projectTile);

    //every time the project tile is clicked, display project details with all its todos in the mainContent
    projectTile.addEventListener("click", () => {
      renderProjectPage(project)
      menuToggle() });
  }, true);

  addProjoectButton(customProjectWrapper);
}
