
export default function renderDOM(){
    const content = document.createElement('div');
    content.id= 'content';

    const header = document.createElement('div');
    header.id= 'header';

    const aside = document.createElement('div');
    aside.id= 'aside';

    const main = document.createElement('div');
    main.id= 'main';

    const footer = document.createElement('div');
    footer.id= 'footer';

    header.textContent= 'HEADER';
    aside.textContent= 'aside';
    aside.style.display = 'none';
    main.textContent= 'main';
    footer.textContent= 'footer';
    
    const menuBtn= document.createElement('span');
    menuBtn.id= 'menuBtn';
    menuBtn.innerHTML= `<i class="fa-solid fa-bars"></i>`;
    menuBtn.addEventListener('click', ()=> menuToggle(aside, main))

    

    content.append(header,menuBtn,aside,main,footer);
    return content;
}


function menuToggle(aside, main){
    if(aside.style.display==='none')
    { 
        aside.style.display ='block';
        aside.style.gridColumn= '1/  9';
        aside.style.gridRow= '2/  12';
        main.style.gridColumn= '9/ 13';
        main.style.gridRow= '2/   12';
    }
    else{
        aside.style.display ='none';
        main.style.gridColumn= '1/ 13';
        main.style.gridRow= '2/   12';
    }

}
