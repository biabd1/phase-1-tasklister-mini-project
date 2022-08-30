document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-content");

  const taskForm = document.getElementById("create-task-force");
  const taskList = document.getElementById("tasks")

  taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTask = document.getElementById("new-task-description").value

    const taskItem = document.createElement("li")
    taskItem.innerText = newTask

    taskList.appendChild(taskItem)
  })
});
