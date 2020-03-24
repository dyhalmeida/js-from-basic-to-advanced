const inputText = document.querySelector(".input-text");
const buttonAdd = document.querySelector(".button-add");
const taskList = document.querySelector(".task-list");

function clearAndFocusInputText() {
  inputText.value = "";
  inputText.focus();
}

function createElement(name) {
  return document.createElement(name);
}

function createButtonRemove(li) {
  const buttonRemove = createElement("button");
  buttonRemove.innerText = "Remove";
  buttonRemove.setAttribute("class", "remove");
  buttonRemove.setAttribute("title", "Remove this task");
  li.appendChild(buttonRemove);
}

/** Add function to buttonRemove for delete item */
document.addEventListener("click", function(e) {
  const element = e.target;
  if (element.classList.contains("remove")) {
    element.parentElement.remove();
    saveTask();
  }
});

function createTask(task) {
  const li = createElement("li");
  li.innerText = task;
  taskList.appendChild(li);
  clearAndFocusInputText();
  createButtonRemove(li);
  saveTask();
}

buttonAdd.addEventListener("click", function() {
  if (!inputText.value) return;
  createTask(inputText.value);
});

inputText.addEventListener("keypress", function(e) {
  if (e.keyCode === 13 && inputText.value) {
    createTask(inputText.value);
  }
});

function saveTask() {
  const tasks = [];
  for (let task of taskList.querySelectorAll("li")) {
    tasks.push(task.innerText.replace("Remove", "").trim());
  }
  localStorage.setItem("task", JSON.stringify(tasks));
}

function initTask() {
  const taskList = JSON.parse(localStorage.getItem("task"));
  for (let task of taskList) {
    createTask(task);
  }
}
initTask();
