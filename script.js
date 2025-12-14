const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Lade Aufgaben aus localStorage beim Start
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => addTaskToDOM(task));

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addTaskToDOM(taskText);
    taskInput.value = '';
  }
});

function addTaskToDOM(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Löschen';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
    tasks = tasks.filter(t => t !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
