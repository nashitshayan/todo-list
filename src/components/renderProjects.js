import { ProjectManager } from "./app";
import addProjoectButton from "./addNewProjectBtn";
import renderProjectPage from "./renderProjectPage";

export default function renderProjects(){

//     if(!localStorage.myLibrary)
//     myLibrary.forEach(book => {
//         let key = (myLibrary.indexOf(book))
//         createNewBookCard(key, book.title, book.author, book.pages,book.isRead);
// })
// else
// {
//    let localStorageLibrary = JSON.parse(localStorage.getItem('myLibrary'));
//    localStorageLibrary.forEach(book => {
//        let key = (localStorageLibrary.indexOf(book));
//        createNewBookCard(key, book.title, book.author, book.pages, book.isRead)
//     })
// }
    //grab all the projects
    let projectsArray= ProjectManager.getAllProjects();
    console.log(projectsArray)
    //grab the projetWrapper
    let customProjectWrapper= document.getElementById('customProjectWrapper');

   

    customProjectWrapper.innerHTML= '';
    // console.log(customProjectsDiv)
    //display each project
    projectsArray.forEach(project=>{
        let projectTile= document.createElement('div');
        projectTile.classList.add('projectTile');
        projectTile.dataset.id= project.pId;
        projectTile.innerHTML= `
        <div class='projectTitle'>${project.pTitle}</div>
        <div class='projectDescription'>${project.pDescription}</div>
        <i id='btnEditProject' class="fa-solid fa-pencil"></i>
        <i id='btnDeleteProject' class="fa-solid fa-trash"></i>
      `
      
      customProjectWrapper.append(projectTile)
      
     //every time the project tile is clicked, display project details with all its todos sin the mainContent
     projectTile.addEventListener('click', ()=>renderProjectPage(project))
    }, true)
   
    addProjoectButton(customProjectWrapper);
}



