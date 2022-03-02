//import { createTodo, markComplete , changePriority} from "./components/app";

import renderDOM from './components/renderDOM';
import './css/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



//let todoOne= createTodo('code1', 'write app logic', currentDate,'high', false);


//console.table(changePriority())
document.body.append(renderDOM())
