const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

let todos = [];

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") return;

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  todos.push(newTodo);

  todoInput.value = "";

  dispalyTodos();
}

function dispalyTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const span = document.createElement("span");
    span.classList.add("todo-text");
    if (todo.completed) {
      span.classList.add("completed");
    }

    span.textContent = todo.text;

    span.addEventListener("click", () => {
      toggleComplete(todo.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

function toggleComplete(id) {
  todos = todos.map((todo) => {
    if (todo.id = id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  dispalyTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  dispalyTodos();
}
