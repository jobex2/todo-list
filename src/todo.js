const Name = (name) => {
    let title =  name;
    const getName = () => console.log(title);
    const setName = (newName) => {title = newName}
    return {getName, setName};
}

const Discription = () => {
    let discription = 'None';
    const getDiscription = () => console.log(discription);
    const setDiscription = (newString) => {discription = newString};
    return {getDiscription, setDiscription};
}

const Date = () => {
    let dueDate = 'None';
    const getDate = () => console.log(dueDate);
    const setDate= (newDate) => {dueDate = newDate};
    return {getDate, setDate};
}

const Completion = () => {
    let completion = false;
    return {completion};
}

const Todo = (name) => {
    let priority = 0;
    const getPriority = () => console.log(priority);
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
export {Todo, Project};