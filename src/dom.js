import eventHandler from './event.js';

const domController = (() => {
    const content = document.getElementById('content');
    const drawArea = document.createElement('div');
    drawArea.setAttribute('class', 'drawArea');
    content.appendChild(drawArea);
    const projectArea = document.createElement('div');
    projectArea.setAttribute('class', 'projectArea');
    drawArea.appendChild(projectArea);
    const tasksArea = document.createElement('div');
    tasksArea.setAttribute('class', 'tasksArea');
    drawArea.appendChild(tasksArea);

    const addProject = (name) => {
        const temp = document.createElement('div');
        temp.setAttribute('class', 'project');
        temp.innerHTML = name;
        temp.addEventListener('click', ()=>{eventHandler.displayTasks(name)});
        projectArea.appendChild(temp);
    }

    const drawProject = (project) => {
        tasksArea.innerText = '';

        project.getTasks().forEach(element => {
            let task = document.createElement('div');
            task.setAttribute('class', 'task');
            tasksArea.appendChild(task);

            let title = document.createElement('div');
            title.innerHTML = element.title;
            title.setAttribute('class', 'taskElement');
            task.appendChild(title);
            let dueDate = document.createElement('div');
            dueDate.innerHTML = element.dueDate;
            dueDate.setAttribute('class', 'taskElement');
            task.appendChild(dueDate);
            let state = document.createElement('div');
            state.innerHTML = element.state;
            state.setAttribute('class', 'taskElement');
            task.appendChild(state);
        });
        
    }

    return {addProject, drawProject};
})();

export default domController