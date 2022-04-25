import "./style.css";
import { Todo, Project } from "./todo";

const projectPopup = document.getElementById('hidden-project');
const taskPopup = document.getElementById('hidden-task');
const cancelProject = document.getElementById('cancel-project-button');
const cancelTask = document.getElementById('cancel-task-button');
const addProjectButton = document.getElementById('add-project-button');
const addTaskButton = document.getElementById('add-task-button');
const createProject = document.getElementsByClassName('add-project-button');
const newProjectInput = document.getElementById('new-project-input');
const newTaskInput = document.getElementById('new-task-input');
const projectsSidebar = document.getElementById('projects-sidebar');
const newTaskbutton = document.getElementById('new-task-button');

let projectsList = [];

createProject[0].addEventListener("click" ,function (){
    projectPopup.classList.toggle("hidden");
});

cancelProject.addEventListener("click" ,function (){
    projectPopup.classList.toggle("hidden");
    newProjectInput.value = '';
});

addProjectButton.addEventListener("click" ,function (){
    if (newProjectInput.value != ''){
        addProject(newProjectInput.value);
    }
});

newTaskbutton.addEventListener("click", function(){
    taskPopup.classList.toggle("hidden");
});

cancelTask.addEventListener("click" ,function (){
    taskPopup.classList.toggle("hidden");
    newTaskInput.value = '';
});

addTaskButton.addEventListener("click" ,function (){
    if (newTaskInput.value != ''){
        addTask(newTaskInput.value);
    }
});
 
function addTask (name) {
    let tasks = document.getElementById('tasks');
    taskPopup.classList.toggle("hidden");
    newTaskInput.value = '';
    let task = document.createElement('div');
    task.classList.add('task', 'hover');
    tasks.append(task);
    let taskLeft = document.createElement('div');
    taskLeft.classList.add('task-letf');
    task.append(taskLeft);
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskLeft.append(checkbox);
    let title = document.createElement('div');
    title.classList.add('task-title');
    title.innerText = name;
    taskLeft.append(title);
    let taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    task.append(taskDate);
    let date = document.createElement('input');
    date.type = "date";
    taskDate.append(date);
}

function addProject (name) {
    projectPopup.classList.toggle("hidden");
    let sidebarproject = document.createElement('button');
    sidebarproject.innerText = name;
    sidebarproject.classList.add('hover-button');
    projectsSidebar.append(sidebarproject);

    let project = Project(newProjectInput.value);
    projectsList.push(project);
    projectsList[0].getName();
    newProjectInput.value = '';
}


//projectsList[0].getTodos()[0].getName()




