//import { ProjectManager } from './app';

import header from "./header";
import aside from "./aside";
import main from "./main";
import footer from "./footer";
export default function renderDOM() {
  const content = document.createElement("div");
  content.id = "content";

  //collapsing sidebar functionality for mobile
  const menuBtn = document.createElement("span");
  menuBtn.id = "menuBtn";
  menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  menuBtn.addEventListener("click", menuToggle);

  content.append(header(), menuBtn, aside(), main(), footer());

  return content;
}
/*
1. form pop up
2. on save store todo
3. render
 */
let flag= true;
function menuToggle(){
     let aside= document.getElementById('aside');
     let main= document.getElementById('main');
  //  if(flag)
  //   {
  //     aside.style.display= 'none';
  //     main.style.gridRow= '2/12';
  //     console.log(flag);
  //     flag=false;
  //   }
  //   else
  //   {
  //     aside.style.display= 'block';
  //     main.style.gridRow= '4/12';
  //     console.log(flag);
  //     flag=true;
  //   }
  if(main.classList.contains('main'))
    {
      main.classList.remove('main');
      main.classList.add('main-toggle');
      aside.classList.remove('aside-toggle');
    }
  else {
    main.classList.add('main');
      main.classList.remove('main-toggle');
      aside.classList.add('aside-toggle');
  }
}
