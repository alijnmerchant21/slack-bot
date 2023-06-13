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

  // Sort the tasks based on priority, deadline, and duration
  tasks.sort((a, b) => {
    // Sort by priority
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }

    // If priority is the same, sort by deadline
    const aDeadline = new Date(a.deadline).getTime();
    const bDeadline = new Date(b.deadline).getTime();
    if (aDeadline !== bDeadline) {
      return aDeadline - bDeadline;
    }

    // If deadline is the same, sort by duration
    return a.duration - b.duration;
  });

  // Reset the form
  document.querySelector('form').reset();
});
