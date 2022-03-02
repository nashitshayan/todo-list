import { ProjectManager } from './app';
import { v4 as uuidv4 } from 'uuid';
import renderProject from './renderProject';
export default function aside(){
    const asideDiv = document.createElement('div');
    asideDiv.id= 'aside';
    asideDiv.textContent= 'ASIDE';
    asideDiv.style.display = 'none';

    let defaultProjectsDiv= document.createElement('div');
    defaultProjectsDiv.textContent= 'DEFAULT PROJECT DIV';
    defaultProjectsDiv.id= 'defaultProjectsDiv';

    let customProjectsDiv= document.createElement('div');
    customProjectsDiv.id= 'customProjectsDiv';

    let addNewProjectDiv= document.createElement('span');
    addNewProjectDiv.innerHTML= `Add New Project <i class="fa fa-plus-circle"></i>`;
    
  
    

    customProjectsDiv.append(addNewProjectDiv)

    
    addNewProjectDiv.addEventListener('click', ()=>newProjectForm(customProjectsDiv,addNewProjectDiv));

    asideDiv.append(defaultProjectsDiv, customProjectsDiv);

    return asideDiv;
}





const handleCancelProjectForm= (customProjectsDiv, newProjForm)=>{
    customProjectsDiv.removeChild(newProjForm);
}


const handleAddProject= (e)=>{
    let newProjectId= uuidv4();
    let projectTitle= document.getElementById('projectTitle').value;
    let projectDescription= document.getElementById('projectDescription').value;
    console.log(projectTitle, projectDescription);

    ProjectManager.addProject(newProjectId,projectTitle,projectDescription);
    
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

    projectTile.addEventListener('click', ()=>renderProject(ProjectManager.getProjectById(pId)))
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

    cancelBtn.addEventListener('click', ()=> handleCancelProjectForm(customProjectsDiv,newProjectFormDiv))

    addProjectBtn.addEventListener('click',handleAddProject)

    newProjectFormDiv.append(addProjectBtn, cancelBtn)
    customProjectsDiv.insertBefore(newProjectFormDiv, addNewProjectDiv);
}

