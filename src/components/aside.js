import { ProjectManager } from './app';
import { v4 as uuidv4 } from 'uuid';
import renderProjects from './renderProjects';
import addProjectButton from './addNewProjectBtn';

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
    let customProjectWrapper= document.createElement('div');
    customProjectWrapper.id= 'customProjectWrapper';

     //make an element that will allow users to add new projects
     addProjectButton(customProjectWrapper);
     
     //event delegation
     customProjectWrapper.addEventListener('click', handleClick)

   
    asideDiv.append(defaultProjectsDiv, customProjectWrapper);
   // renderProjects();
    
    return asideDiv;
}

const handleClick = (e)=>{
    if(e.target.closest('#addNewProject')) newProjectForm(e.target.closest('#addNewProject'));
    if(e.target.closest('#btnAddProject')) handleAddProject(e);
    if(e.target.closest('#btnCancelProject')) handleCancelProjectForm(e.target.closest('#btnCancelProject').parentElement);
}

const newProjectForm = (addNewProjectDiv)=>{

    let newProjectFormDiv= document.createElement('div');
    
    newProjectFormDiv.innerHTML= `
        <input id='projectTitle' type='text' placeholder='enter title here'/>
        <input id='projectDescription' type='text' placeholder='enter description here'/>
    `

    let btnAddProject= document.createElement('button');
    btnAddProject.type= 'submit';
    btnAddProject.textContent= "Add";
    btnAddProject.id='btnAddProject';
    
    let btnCancelProject= document.createElement('button');
    btnCancelProject.textContent= "Cancel";
    btnCancelProject.id='btnCancelProject';



    newProjectFormDiv.append(btnAddProject, btnCancelProject)
    customProjectWrapper.insertBefore(newProjectFormDiv, addNewProjectDiv);
}



const handleCancelProjectForm= (newProjForm)=>{
    customProjectWrapper.removeChild(newProjForm);
}


const handleAddProject= (e)=>{
    let newProjectId= uuidv4();
    let projectTitle= document.getElementById('projectTitle').value;
    let projectDescription= document.getElementById('projectDescription').value;
    // console.log(projectTitle, projectDescription);

    //add project to the Project Array
    ProjectManager.addProject(newProjectId,projectTitle,projectDescription);

   // let projectForm= e.target.parentElement;
    //display the projects
    renderProjects();
   // renderNewProjectTile(projectForm, newProjectId);
}


// const renderNewProjectTile= (projectForm, pId)=>{
//     //console.log(ProjectManager.getProjectById(pId))
//     let projectTile= document.createElement('div');
//     projectTile.classList.add('projectTile');
//     projectTile.innerHTML= `
//         <div>${ProjectManager.getProjectById(pId).pTitle}</div>
//         <div>${ProjectManager.getProjectById(pId).pDescription}</div>
//     `
//     customProjectWrapper.replaceChild(projectTile, projectForm)

//     //every time the project tile is clicked, display project details with all its todos sin the mainContent
//     projectTile.addEventListener('click', ()=>renderProjectPage(ProjectManager.getProjectById(pId)))
// }



