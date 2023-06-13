let tasks = [];

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = document.getElementById('task-name').value;
  const priority = document.getElementById('priority').value;
  const deadline = document.getElementById('deadline').value;
  const duration = document.getElementById('duration').value;
  const repetition = document.getElementById('repetition').value;

  const task = {
    name: taskName,
    priority: priority,
    deadline: deadline,
    duration: duration,
    repetition: repetition
  };

  tasks.push(task);

  // Reset the form
  document.querySelector('form').reset();
});
