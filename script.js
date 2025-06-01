function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
  
    li.innerHTML = `
      <span onclick="toggleDone(this)">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function deleteTask(btn) {
    btn.parentElement.remove();
  }
  
  function toggleDone(task) {
    task.parentElement.classList.toggle("completed");
  }