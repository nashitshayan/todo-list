export default function addTodoButton(todoWrapper) {
  let addTodo = document.createElement("button");
  addTodo.id = "addTodo";
  addTodo.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  todoWrapper.append(addTodo);
}
