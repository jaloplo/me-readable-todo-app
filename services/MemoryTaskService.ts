import TaskEntity from './TaskEntity';
import TaskList from './TaskList';
import TaskService from './TaskService';

type TaskServiceCreator = () => TaskService;

const MemoryTaskService: TaskServiceCreator = () => {

    const tasks: TaskList = [];

    return {
        add: (title) => {
            const task = {
                title: title,
                done: false
            };
            
            tasks.push(task);
        
            return task;
        },
        complete: (title) => {
            let taskIndex = 0;
            tasks.forEach((task: TaskEntity, index: number) => {
                if(task.title === title) {
                    taskIndex = index;
                }
            });
            tasks[taskIndex].done = true;
        
            return tasks[taskIndex];
        },
        get: () => {
            return [...tasks];
        }
    };
};

export default MemoryTaskService;