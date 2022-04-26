import { storeProject, storeProjectNamesList } from "./storage";

const Name = (name) => {
    let title =  name;
    const getName = () => title;
    const setName = (newName) => {title = newName}
    return {getName, setName};
}

const Discription = () => {
    let discription = 'None';
    const getDiscription = () => discription;
    const setDiscription = (newString) => {discription = newString};
    return {getDiscription, setDiscription};
}

const Date = () => {
    let dueDate = 'None';
    const getDate = () => dueDate;
    const setDate= (newDate) => {dueDate = newDate};
    return {getDate, setDate};
}

const Completion = () => {
    let completion = false;
    return {completion};
}

const Todo = (name) => {
    let priority = 0;
    const getPriority = () => priority;
    const setPriority = (newPriority) => priority = newPriority;
    return Object.assign({}, Name(name), Completion(), Discription(), 
        Date(), {getPriority, setPriority});    
}

const Project = (name) => {
    let todos = [];
    const getTodos = () => todos;
    const add = (todo) => todos.push(todo);

    return Object.assign({}, Name(name), Completion(), Discription(), 
        Date(), {getTodos, add});
}

function newProject (name, projectsList) {
    let project = Project(name);
    projectsList[name] = project;
    storeProject(project);
    storeProjectNamesList(name);
}


function newTodo (name, focus, projects) {
    let project = {};
    projects.forEach((item) => {
        if(item.getName() == focus){
            project = item;
        }
    });
    let todo = Todo(name);
    project.add(todo);
    storeProject(project);
}

export {Todo, newTodo, Project, newProject};