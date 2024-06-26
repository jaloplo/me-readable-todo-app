import TaskEntity from './TaskEntity';
import TaskList from './TaskList';

type TaskService = {
    add: (title: string) => TaskEntity,
    complete: (title: string) => TaskEntity,
    get: () => TaskList
};

export default TaskService;