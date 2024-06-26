import TaskCompletionCapability from "../TaskCompletionCapability";
import PersistenceCapability from "../../requires/PersistenceCapability";

type TaskCompleterUseCaseCreator = (storage: PersistenceCapability) => TaskCompletionCapability;

const TaskCompleterUseCase: TaskCompleterUseCaseCreator = (storage) => {

    return {
        update: (task) => {
            const newTask = Object.assign({}, task);
            newTask.done = true;

            const updatedTask = storage.patch(task, newTask);

            return updatedTask;
        }
    };
}

export default TaskCompleterUseCase;