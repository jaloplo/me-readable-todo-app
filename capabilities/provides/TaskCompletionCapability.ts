import TaskModel from "../model/TaskModel";

type TaskCompletionCapability = {
    update: (title: string) => TaskModel
};

export default TaskCompletionCapability;