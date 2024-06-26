import TaskModel from "../model/TaskModel";

type TaskCompletionCapability = {
    update: (task: TaskModel) => TaskModel
};

export default TaskCompletionCapability;