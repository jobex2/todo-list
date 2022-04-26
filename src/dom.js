


//create DOM for task
function addTaskDOM (name) {
    const taskPopup = document.getElementById('hidden-task');
    taskPopup.classList.toggle("hidden");
    let tasks = document.getElementById('tasks');
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


function addProjectDom (name) {
    const projectsSidebar = document.getElementById('projects-sidebar');
    const projectPopup = document.getElementById('hidden-project');
    projectPopup.classList.toggle("hidden");
    let sidebarproject = document.createElement('button');
    sidebarproject.innerText = name;
    sidebarproject.classList.add('hover-button', 'project-button');
    sidebarproject.id = name;
    sidebarproject.setAttribute("data-project", name);
    projectsSidebar.append(sidebarproject);

}

function displayProjects (projectList) {
    //check to see if list is populated
    if (projectList){
        const keys = Object.keys(projectList);
        //create dom for each project
        keys.forEach((key) => {
            //exclude inbox project
            if(key != "Inbox"){
                //create DOM
                addProjectDom(key);
            }
        });
    }
}

function removeChildren (parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function displayTodos (focus, projectList) {
    let todos = projectList[focus].getTodos();
    todos.forEach(todo => {
        addTaskDOM(todo.getName());
    });
}

function displayProjectTitle (title) {
    let tname = document.getElementById('project-title');
    tname.innerText = title;
}

export {addTaskDOM, addProjectDom, removeChildren, displayTodos, displayProjectTitle};