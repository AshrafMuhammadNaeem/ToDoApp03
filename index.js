var taskToDo = document.getElementById("toDo");
var toDoInput = document.createElement("input");
    toDoInput.innerHTML = "toDO";
    toDoInput.className = "input";

    taskToDo.appendChild(toDoInput);
var addButton = document.createElement("Button");
       addButton.innerHTML = "Add";
       addButton.className = "Add";

    taskToDo.appendChild(addButton);
var clearButton = document.createElement("Button");
    clearButton.innerHTML = "Clear";
    clearButton.className = "Clear";

    taskToDo.appendChild(clearButton);
 var tasksList = document.getElementById("list");
addButton.addEventListener("click", addTask);
function addTask() {
    var taskInput = toDoInput.value;
    if (taskInput.trim()) {
        var newItem = document.createElement("li");
        var textInput = document.createTextNode(taskInput);
            newItem.appendChild(textInput);
            tasksList.appendChild(newItem);
            toDoInput.value = "";
        var removeButton = document.createElement("Button");
            removeButton.innerHTML = "Done";
            removeButton.className ="remove"
            newItem.appendChild(removeButton);
            tasksList.appendChild(newItem);
        removeButton.addEventListener("click", removeTask);


    } 
    else {
        alert("Task can not be empty:");
    }
    
}
clearButton.addEventListener("click", clearList);
function clearList(){
    tasksList.innerHTML = "";
}

function removeTask(e) {
    var removedTask = e.target.parentElement;
    tasksList.removeChild(removedTask);

    
}