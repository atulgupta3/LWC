import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
    @track tasks = [];
    newTask = '';

    connectedCallback() {
        this.loadTasks();
    }

    loadTasks() {
        const storedTasks = localStorage.getItem('todoTasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

    saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
    }

    handleInputChange(event) {
        this.newTask = event.target.value;
    }

    addTask() {
        if (this.newTask.trim() !== '') {
            const newTaskObject = {
                id: Date.now(), // Simple unique ID
                name: this.newTask.trim(),
                completed: false
            };
            this.tasks = [...this.tasks, newTaskObject];
            this.newTask = '';
            this.saveTasks();
        }
    }

    deleteTask(event) {
        const taskIdToDelete = parseInt(event.currentTarget.dataset.id, 10);
        this.tasks = this.tasks.filter(task => task.id !== taskIdToDelete);
        this.saveTasks();
    }

    toggleComplete(event) {
        const taskIdToToggle = parseInt(event.currentTarget.dataset.id, 10);
        this.tasks = this.tasks.map(task =>
            (task.id === taskIdToToggle ? { ...task, completed: !task.completed } : task)
        );
        this.saveTasks();
    }

    get incompleteTasks() {
        return this.tasks.filter(task => !task.completed);
    }

    get completedTasks() {
        return this.tasks.filter(task => task.completed);
    }
}