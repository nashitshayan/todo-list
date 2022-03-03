export default function header(){

        //create and populate the header
        const headerElement = document.createElement('header');
        headerElement.textContent= 'Todo App';

        return headerElement;
}