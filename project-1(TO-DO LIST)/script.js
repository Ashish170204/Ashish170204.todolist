// script.js
let todolist = [];

function addtodo() {
  const inputElement = document.getElementById('text');
  const dateElement = document.getElementById('date');
  const item = inputElement.value.trim();
  const duedate = dateElement.value;

  if (!item || !duedate) {
    alert("Please fill both task and due date.");
    return;
  }

  todolist.push({ item, duedate });
  inputElement.value = '';
  dateElement.value = '';
  displayitems();
}

function displayitems() {
  const container = document.getElementById('todo-container');
  container.innerHTML = '';

  if (todolist.length === 0) {
    container.innerHTML = `<p class="empty-message">No todos yet. Start adding!</p>`;
    return;
  }

  todolist.forEach((todo, index) => {
    const todoHTML = `
      <div class="todo-item">
        <div class="todo-text">
          <span>${todo.item}</span>
          <span>Due: ${todo.duedate}</span>
        </div>
        <button class="btn btn-delete" onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;
    container.innerHTML += todoHTML;
  });
}

function deleteTodo(index) {
  todolist.splice(index, 1);
  displayitems();
}

displayitems();
