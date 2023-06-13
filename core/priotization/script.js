// Define the tasks array
const tasks = [];

// Function to add a new task
function addTask(name, priority, deadline, duration, repetition) {
  tasks.push({
    name,
    priority,
    deadline,
    duration,
    repetition
  });
}

// Function to display the tasks in a table
function displayTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const priorityCell = document.createElement('td');
    const deadlineCell = document.createElement('td');
    const durationCell = document.createElement('td');
    const repetitionCell = document.createElement('td');

    nameCell.textContent = task.name;
    priorityCell.textContent = task.priority;
    deadlineCell.textContent = task.deadline;
    durationCell.textContent = task.duration;
    repetitionCell.textContent = task.repetition;

    row.appendChild(nameCell);
    row.appendChild(priorityCell);
    row.appendChild(deadlineCell);
    row.appendChild(durationCell);
    row.appendChild(repetitionCell);

    taskList.appendChild(row);
  });
}

// Add an event listener to the form's submit event
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Retrieve the values of the form fields
  const name = document.getElementById('task-name').value;
  const priority = document.getElementById('priority').value;
  const deadline = document.getElementById('deadline').value;
  const duration = document.getElementById('duration').value;
  const repetition = document.getElementById('repetition').value;

  // Add the new task to the tasks array
  addTask(name, priority, deadline, duration, repetition);

  // Display the tasks in the table
  displayTasks();

  // Reset the form fields
  form.reset();
});
