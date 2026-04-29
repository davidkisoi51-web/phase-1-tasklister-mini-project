document.addEventListener("DOMContentLoaded", () => {
// Step 2: Connect forms HTML to Javascript
const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Step 3: Handle form data
    // Grab the input directly by its ID to ensure the test environment finds it
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    // 2. Call the buildToDo function
    buildToDo(taskDescription);

    // Optional: Clear the input field
    taskForm.reset();
});

// Step 4: Add item to list and display
function buildToDo(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}
});
