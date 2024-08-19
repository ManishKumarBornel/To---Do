document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task-button");
    const newTaskInput = document.getElementById("new-task-input");

    function createTask(taskText) {

        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        taskDiv.appendChild(taskSpan);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "DELETE";

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskDiv);
        });

        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
    }


    addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") { 
            createTask(taskText); 
            newTaskInput.value = ""; 
        }
    });


    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", function() {
            const taskDiv = button.parentElement;
            taskList.removeChild(taskDiv);
        });
    });
});
