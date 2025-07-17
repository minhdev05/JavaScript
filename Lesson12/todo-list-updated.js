const todoList = JSON.parse(localStorage.getItem("task"));

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { taskName, taskTime } = todoObject;
    const html = `
        <div>${taskName}</div> 
        <div>${taskTime}</div>
        <button onclick="deleteTodo(${i})" class="delete-btn">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = `${todoListHTML}`;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(todoList));
  renderTodoList();
}

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
