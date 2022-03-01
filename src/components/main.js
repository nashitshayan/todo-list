
export default function main(){
    const main = document.createElement('div');
    main.id= 'main';
    
    let projectHeading= document.createElement('h2');
    projectHeading.id= 'projectHeading';
    projectHeading.textContent= 'Untitled';

    let todoWrapper= document.createElement('div');
    todoWrapper.id='todoWrapper';
    main.append(projectHeading, todoWrapper)
    return main;
}