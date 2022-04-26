import { Project, Todo } from "./todo";

//store list of projects
const storeProjectNamesList = (list) => {
    localStorage.removeItem('ProjectList');
    localStorage.setItem("ProjectList", JSON.stringify(list));
}

//resort list of projects
const restoreProjectNamesList = () => {
    let list = JSON.parse(localStorage.getItem('ProjectList'));
    if (list) {
        return list;
    }
    return [];
}

//store a project
const storeProject = (project) => {
    //remove the old project
    if ( localStorage.getItem(project.getName()) ) {
        localStorage.removeItem(project.getName());
    }
    let tasks = project.getTodos();
    let ProjectData = {
        'name': project.getName(),
        'todos': [],
        'state': {}
    };

    //load into ProjectData
    ProjectData.state['completion'] = project.completion;
    ProjectData.state['discription'] = project.getDiscription();
    ProjectData.state['date'] = project.getDate();

    //interate through tasks and add them to the data
    tasks.forEach(task => {
        let todo = {};
        todo['name'] = task.getName();
        todo['priority'] = task.getPriority();
        todo['completion'] = task.getCompletion();
        todo['discription'] = task.getDiscription();
        todo['date'] = task.getDate();

        ProjectData.todos.push(todo);
    });

    localStorage.setItem(ProjectData['name'], JSON.stringify(ProjectData));
}

//restore project
const restoreProject = (rProjectName) => {
    //parse data back into object
    let ProjectData = JSON.parse(localStorage.getItem(rProjectName));
    if(!ProjectData) {
        return null;
    }
    //create new project
    let project = Project(ProjectData['name']);
    //copy date from project object into project
    project.completion = ProjectData.state['completion'];
    project.setDiscription(ProjectData.state['discription']);
    project.setDate(ProjectData.state['date'])

    //copy todos into project if any
    let todos = ProjectData.todo;
    if (todos) {
        todos.forEach(task => {
            let todo = Todo(task.getName());
            todo.setPriority(task['priority']);
            todo.comletion = task['completion'];
            todo.setDiscription(task['discription']);
            todo.setDate(task['date']);
            project.add(todo);
        });
    }
    return project;
}

//retore all projets
const restoreAllProjects = (list) => {
    let projects = [];
    if (list){
        list.forEach(projectName => {
            projects.push(restoreProject(projectName));
        });
    }
    return projects;
}

export {storeProject, restoreProject, restoreAllProjects, 
    storeProjectNamesList, restoreProjectNamesList};