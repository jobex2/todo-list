import "./style.css";
import { newTodo, newProject } from "./todo";
import {restoreAllProjects,restoreProject,restoreProjectList, restoreProjectNamesList, storeProject, storeProjectNamesList } from "./storage";
import {addTaskDOM, addProjectDom, removeChildren, displayTodos, displayProjectTitle} from './dom.js';

//restore project list
let projectNames = restoreProjectNamesList();

//restore projects from list
let projectsList = restoreAllProjects(projectNames);

//get project elements
const projectPopup = document.getElementById('hidden-project');
const cancelProject = document.getElementById('cancel-project-button');
const addProjectButton = document.getElementById('add-project-button');
const createProject = document.getElementsByClassName('add-project-button');
const newProjectInput = document.getElementById('new-project-input');

// get task elements
const taskPopup = document.getElementById('hidden-task');
const cancelTask = document.getElementById('cancel-task-button');
const addTaskDOMButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');
const newTaskbutton = document.getElementById('new-task-button');

//add in default "Inbox" project
if (projectsList.length == 0) {
    newProject("Inbox", projectsList);
    projectsList.push('Inbox');
}
//focused project to display, inbox default
let focused = "Inbox";

//listen for focus on project
let focusProjects = document.querySelectorAll('.project-button');
focusProjects.forEach(button => {
    button.addEventListener("click", function() {
        focused = button.dataset.project;
        displayProjectTitle(focused);
        let tasks = document.getElementById('tasks');
        removeChildren(tasks)
        displayTodos(focused, projectsList);
    });
});

//listen for the "Add Project" button
createProject[0].addEventListener("click" ,function (){
    projectPopup.classList.toggle("hidden");
});

//listen for the "Cancel" button under project add
cancelProject.addEventListener("click" ,function (){
    projectPopup.classList.toggle("hidden");
    newProjectInput.value = '';
});

//listen for the "Add" button under project add
addProjectButton.addEventListener("click" ,function (){
    if (newProjectInput.value != ''){

        //create DOM
        addProjectDom(newProjectInput.value);

        //add event listener for the project
        let sidebarproject = document.getElementById(newProjectInput.value);
        sidebarproject.addEventListener("click", function() {
            focused = sidebarproject.dataset.project;
            displayProjectTitle(focused);
            let tasks = document.getElementById('tasks');
            removeChildren(tasks)
            displayTodos(focused, projectsList);
        });
        //Create new Project object and add to storage
        newProject(newProjectInput.value, projectsList);
        //clear input
        newProjectInput.value = '';
    }
});

//listen for the "Add Task" button
newTaskbutton.addEventListener("click", function(){
    taskPopup.classList.toggle("hidden");
});

//listen for the "Cancel" button under project add
cancelTask.addEventListener("click" ,function (){
    taskPopup.classList.toggle("hidden");
    newTaskInput.value = '';
});

//listen for the "Add" button under task add
addTaskDOMButton.addEventListener("click" ,function (){
    if (newTaskInput.value != ''){
        //create DOM for task
        addTaskDOM(newTaskInput.value);
        //create todo and add to project
        newTodo(newTaskInput.value, focused, projectsList);
        newTaskInput.value = '';
    }
});
