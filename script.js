function addTask() {

    const taskInput = document.getElementById("taskInput");
    const subjectInput = document.getElementById("subjectInput");
    const dateInput = document.getElementById("dateInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;
    const subject = subjectInput.value;
    const date = dateInput.value;

    if (task === "" || subject === "" || date === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Remove "No tasks" message
    const emptyMessage = document.querySelector(".empty");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Create new task
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-info" onclick="completeTask(this)">
            <strong>${task}</strong><br>
            <small>${subject} | ${date}</small>
        </div>

        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = "";
    subjectInput.value = "";
    dateInput.value = "";
}


// Mark task as completed
function completeTask(element) {
    element.parentElement.classList.toggle("completed");
}


// Delete task
function deleteTask(button) {
    button.parentElement.remove();

    const taskList = document.getElementById("taskList");

    if (taskList.children.length === 0) {
        taskList.innerHTML = `
            <li class="empty">No tasks added yet.</li>
        `;
    }
}
