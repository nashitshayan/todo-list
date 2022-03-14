//import { ProjectManager } from './app';

import header from "./header";
import aside from "./aside";
import main from "./main";
import footer from "./footer";
import menuToggle from "./menuToggle";


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



