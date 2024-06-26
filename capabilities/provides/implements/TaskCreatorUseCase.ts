import TaskCreationCapability from "../TaskCreationCapability";
import TaskModel from "../../model/TaskModel";
import PersistenceCapability from "../../requires/PersistenceCapability";

type TaskCreatorUseCaseCreator = (storage: PersistenceCapability) => TaskCreationCapability;

const TaskCreatorUseCase: TaskCreatorUseCaseCreator = (storage) => {

    return {
        create: (title) => {
            const initialTask: TaskModel = {
                title: title,
                done: false
            };

            const createdTask = storage.create(initialTask);

            return createdTask;
        }
    };
}

export default TaskCreatorUseCase;