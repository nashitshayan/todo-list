import { ProjectManager } from './app';
import { v4 as uuidv4 } from 'uuid';
import renderProjectPage from './renderProject';



export default function aside(){
    // make a container to hold all sidebar elements
    // NEEDS TO BE UPDATED
    const asideDiv = document.createElement('div');
    asideDiv.id= 'aside';
    asideDiv.textContent= 'ASIDE';
    asideDiv.style.display = 'none';

    //make a container to hold default projects
    //NEEDS TO BE UPDATED
    let defaultProjectsDiv= document.createElement('div');
    defaultProjectsDiv.textContent= 'DEFAULT PROJECT DIV';
    defaultProjectsDiv.id= 'defaultProjectsDiv';


    //make a container to hold custom projects
    let customProjectsDiv= document.createElement('div');
    customProjectsDiv.id= 'customProjectsDiv';

    //make an element that will allow users to add new projects
    let addNewProjectDiv= document.createElement('span');
    addNewProjectDiv.innerHTML= `Add New Project <i class="fa fa-plus-circle"></i>`;
    
    
    customProjectsDiv.append(addNewProjectDiv)
    
    //pop out a new project form
    addNewProjectDiv.addEventListener('click', ()=>newProjectForm(customProjectsDiv,addNewProjectDiv));

    asideDiv.append(defaultProjectsDiv, customProjectsDiv);

    return asideDiv;
}


const newProjectForm = (customProjectsDiv,addNewProjectDiv)=>{

    let newProjectFormDiv= document.createElement('div');
    
    newProjectFormDiv.innerHTML= `
        <input id='projectTitle' type='text' placeholder='enter title here'/>
        <input id='projectDescription' type='text' placeholder='enter description here'/>
    `

    let addProjectBtn= document.createElement('button');
    addProjectBtn.type= 'submit';
    addProjectBtn.textContent= "Add";
    
    let cancelBtn= document.createElement('button');
    cancelBtn.textContent= "Cancel";

    //cancel project
    cancelBtn.addEventListener('click', ()=> handleCancelProjectForm(customProjectsDiv,newProjectFormDiv))

    //save project
    addProjectBtn.addEventListener('click',handleAddProject)

    newProjectFormDiv.append(addProjectBtn, cancelBtn)
    customProjectsDiv.insertBefore(newProjectFormDiv, addNewProjectDiv);
}



const handleCancelProjectForm= (customProjectsDiv, newProjForm)=>{
    customProjectsDiv.removeChild(newProjForm);
}


const handleAddProject= (e)=>{
    let newProjectId= uuidv4();
    let projectTitle= document.getElementById('projectTitle').value;
    let projectDescription= document.getElementById('projectDescription').value;
    // console.log(projectTitle, projectDescription);

    //add project to the Project Array
    ProjectManager.addProject(newProjectId,projectTitle,projectDescription);
    
    //display the newly added project
    renderNewProject(e.target.parentElement, newProjectId);
}


const renderNewProject= (projectForm, pId)=>{
    //console.log(ProjectManager.getProjectById(pId))
    let projectTile= document.createElement('div');
    projectTile.innerHTML= `
        <div>${ProjectManager.getProjectById(pId).pTitle}</div>
        <div>${ProjectManager.getProjectById(pId).pDescription}</div>
    `
    projectForm.parentElement.replaceChild(projectTile, projectForm)

    //every time the project tile is clicked, display project details with all its todos sin the mainContent
    projectTile.addEventListener('click', ()=>renderProjectPage(ProjectManager.getProjectById(pId)))
}



