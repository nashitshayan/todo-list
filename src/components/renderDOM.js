
//import { ProjectManager } from './app';

import header from './header';
import aside from './aside';
import main from './main';
import footer from './footer';
export default function renderDOM(){
    const content = document.createElement('div');
    content.id= 'content';

    //collapsing sidebar functionality for mobile
    const menuBtn= document.createElement('span');
    menuBtn.id= 'menuBtn';
    menuBtn.innerHTML= `<i class="fa-solid fa-bars"></i>`;
    menuBtn.addEventListener('click', ()=> menuToggle(aside, main))

    content.append(header(),menuBtn,aside(),main(),footer());
    return content;
}
/*
1. form pop up
2. on save store todo
3. render
 */


// function menuToggle(aside, main){
//     if(aside.style.display==='none')
//     { 
//         aside.style.display ='block';
//         aside.style.gridColumn= '1/  9';
//         aside.style.gridRow= '2/  12';
//         main.style.gridColumn= '9/ 13';
//         main.style.gridRow= '2/   12';
//     }
//     else{
//         aside.style.display ='none';
//         main.style.gridColumn= '1/ 13';
//         main.style.gridRow= '2/   12';
//     }

// }

