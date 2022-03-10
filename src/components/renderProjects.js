import { ProjectManager } from "./app";
import addProjoectButton from "./addNewProjectBtn";
import renderProjectPage from "./renderProjectPage";

export default function renderProjects(){
    //grab all the projects
    let projectsArray= ProjectManager.getAllProjects();
    //grab the projetWrapper
    let customProjectWrapper= document.getElementById('customProjectWrapper');

   

    customProjectWrapper.innerHTML= '';
    // console.log(customProjectsDiv)
    //display each project
    projectsArray.forEach(project=>{
        let projectTile= document.createElement('div');
        projectTile.classList.add('projectTile');
        projectTile.innerHTML= `
        <div>${project.pTitle}</div>
        <div>${project.pDescription}</div>
      `
        
      customProjectWrapper.append(projectTile)
      
     //every time the project tile is clicked, display project details with all its todos sin the mainContent
     projectTile.addEventListener('click', ()=>renderProjectPage(project))
    })
   
    addProjoectButton(customProjectWrapper);
}



