export default function addProjectButton(ProjectsWrapper){
    let addNewProjectDiv= document.createElement('div');
    addNewProjectDiv.innerHTML= `Add New Project <i class="fa fa-plus-circle"></i>`;
    addNewProjectDiv.id='addNewProject';
    ProjectsWrapper.append(addNewProjectDiv)
    
}