import domController from './dom.js';

const project = (name) => {
    let tasks = [];
    const addTask = (title, dueDate='', state='') => {
        let temp = {title, dueDate, state};
        tasks.push(temp);
    }
    const getTasks = () => {
        return tasks;
    }
    return {name, addTask, getTasks};
}

const app = (() => {
    let projects = [];
    const addProject = (name) => {
        if(projects.findIndex(element => element.name == name) != -1)
            return;
        let temp = project(name);
        temp.addTask('task', 'now', 'unfinished');
        projects.push(temp);
        domController.addProject(temp.name);
    }
    const openProject = (name) => {
        let index = projects.findIndex(element => element.name == name);
        if(index == -1)
            return;
        domController.drawProject(projects[index]);        
    }
    return {addProject, openProject};
})();

export default app