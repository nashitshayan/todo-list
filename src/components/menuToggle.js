export default function menuToggle(){
    let aside= document.getElementById('aside');
    let main= document.getElementById('main');
 
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