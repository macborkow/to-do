import app from './app.js';

const eventHandler = (() => {
    const displayTasks = (name) => {
        console.log('im working t. ' + name);
        app.openProject(name);
    };
    return {displayTasks};
})();

export default eventHandler