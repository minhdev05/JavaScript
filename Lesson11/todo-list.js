const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = `${todoListHTML}`;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const taskName = inputElement.value;

  todoList.push(taskName);
  renderTodoList();
  inputElement.value = "";
}
