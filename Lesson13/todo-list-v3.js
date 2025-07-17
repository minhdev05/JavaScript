const todoList = JSON.parse(localStorage.getItem("task"));

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { taskName, taskTime } = todoObject;
    const html = `
        <div>${taskName}</div>
        <div>${taskTime}</div>
        <button class="delete-btn js-delete-btn">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-btn").forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });
  });
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(todoList));
  renderTodoList();
}

document.querySelector(".js-add-btn").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputNameElement = document.querySelector(".js-name-input");
  const inputTimeElement = document.querySelector(".js-time-input");
  const taskName = inputNameElement.value;
  const taskTime = inputTimeElement.value;

  todoList.push({ taskName, taskTime });
  localStorage.setItem("task", JSON.stringify(todoList));
  renderTodoList();
  inputNameElement.value = "";
  inputTimeElement.value = "";
}
