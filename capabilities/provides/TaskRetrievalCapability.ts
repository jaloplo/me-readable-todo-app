import TaskCollection from "../model/TaskCollection";

type TaskRetrievalCapability = {
    retrieve: () => TaskCollection
};

export default TaskRetrievalCapability;