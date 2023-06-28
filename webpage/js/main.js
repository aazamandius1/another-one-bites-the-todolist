let inputField = document.getElementById('inputField'); 
const addTaskButton = document.getElementById('addTaskButton');


addTaskButton.addEventListener( 'click', function(){
  let taskText = inputField.value.trim();

  if (taskText !== "") {
    let taskObject = createTask(taskText);
    let taskObjectDom =createTaskDom(taskObject);
    appendTask(taskObjectDom);
    inputField.value = "";
  }
})

function createTask (taskText) {
  const defaultStatus = 'inbox';
  const defaultPriority = 1;

  const newTask = { 
    name: taskText,
    status: defaultStatus,
    priority: defaultPriority };

    return newTask;
}

function createTaskDom (taskObject) {
  let taskItemDom = document.createElement('div');
  let taskItemText = document.createElement('p')
  taskItemDom.appendChild(taskItemText);

  taskItemDom.classList.add('taskDiv');
  taskItemText.classList.add('taskP');
  taskItemText.innerText = taskObject.name;
  console.log("it fcucking works");
  return taskItemDom;
}

function appendTask(task) {
  document.getElementById('mainBoard').append(task)
}