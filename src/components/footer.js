export default function footer(){
    //create and populate the footer
    const footerElement = document.createElement('footer');
    // footerElement.id= 'footer';
    footerElement.innerHTML= `
    Made by <a href="https://github.com/nashitshayan" target="_blank">Nashit Shayan Khan.</a> Click <a href="https://github.com/nashitshayan/todo-list" target="_blank">here</a> to see the code.
    `

    return footerElement
}