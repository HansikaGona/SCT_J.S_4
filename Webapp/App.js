const form = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = document.getElementById('task-input').value;
  const taskTime = document.getElementById('task-time').value;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = `${taskText} - ${new Date(taskTime).toLocaleString()}`;
  li.appendChild(span);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔️';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.onclick = () => {
    const newTask = prompt('Edit task:', taskText);
    if (newTask) span.textContent = `${newTask} - ${new Date(taskTime).toLocaleString()}`;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);
  taskList.appendChild(li);

  form.reset();
});
