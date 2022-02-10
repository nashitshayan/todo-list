import { createTodo, markComplete , changePriority} from "./components/app";
import {format} from 'date-fns';


let currentDate= format(new Date(), 'do MMM, yyyy');
 let todoOne= createTodo('code1', 'write app logic', currentDate,'high', false);


console.table(changePriority())

