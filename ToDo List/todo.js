document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const taskList = document.getElementById('task-list');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const titleInput = document.getElementById('task-title');
      const detailsInput = document.getElementById('task-details');
  
      const title = titleInput.value.trim();
      const details = detailsInput.value.trim();
  
      if (title === '') {
        alert('Please enter a task title.');
        return;
      }
  
      const task = createTask(title, details);
      taskList.appendChild(task);
  
      titleInput.value = '';
      detailsInput.value = '';
    });
  
    function createTask(title, details) {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${title}</strong>
        ${details ? `- ${details}` : ''}
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      `;
  
      li.querySelector('.edit-btn').addEventListener('click', function () {
        const newTitle = prompt('Enter new title:', title);
        if (newTitle !== null && newTitle.trim() !== '') {
          li.querySelector('strong').textContent = newTitle.trim();
        }
      });
  
      li.querySelector('.delete-btn').addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this task?')) {
          li.remove();
        }
      });
  
      return li;
    }
  });
  