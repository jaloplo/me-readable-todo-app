import TaskRetrievalByTitleCapability from "../TaskRetrievalByTitleCapability";
import PersistenceCapability from "../../requires/PersistenceCapability";

type TaskRetrieverByTitleUseCaseCreator = (storage: PersistenceCapability) => TaskRetrievalByTitleCapability;

const TaskRetrieverByTitleUseCase: TaskRetrieverByTitleUseCaseCreator = (storage) => {

    return {
        retrieve: (title) => {
            return storage.find().filter(t => t.title === title).pop();
        }
    };
}

export default TaskRetrieverByTitleUseCase;