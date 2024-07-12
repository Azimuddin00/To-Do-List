const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const resetButton = document.getElementById('reset-button');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();

    if (taskText !== '') {
        addTask(taskText); 
        input.value = ''; 
    }
});


resetButton.addEventListener('click', function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});


function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item');

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    todoList.appendChild(li);
}
