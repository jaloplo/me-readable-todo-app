import TaskProperties from './TaskProperties';

type TaskModel = TaskProperties & {
    title: string;
};

export default TaskModel;