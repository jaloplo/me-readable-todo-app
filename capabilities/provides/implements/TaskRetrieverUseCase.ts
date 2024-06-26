import TaskRetrievalCapability from "../TaskRetrievalCapability";
import PersistenceCapability from "../../requires/PersistenceCapability";

type TaskRetrieverUseCaseCreator = (storage: PersistenceCapability) => TaskRetrievalCapability;

const TaskRetrieverUseCase: TaskRetrieverUseCaseCreator = (storage) => {

    return {
        retrieve: () => {
            return storage.find();
        }
    };
}

export default TaskRetrieverUseCase;