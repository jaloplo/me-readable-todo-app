import TaskModel from "../model/TaskModel";

type TaskRetrievalByTitleCapability = {
    retrieve: (title: string) => TaskModel | undefined
};

export default TaskRetrievalByTitleCapability;