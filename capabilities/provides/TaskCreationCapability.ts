import TaskModel from "../model/TaskModel";

type TaskCreationCapability = {
    create: (title: string) => TaskModel
};

export default TaskCreationCapability;