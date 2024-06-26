import TaskModel from "../../model/TaskModel";
import TaskCompletionCapability from "../TaskCompletionCapability";
import PersistenceCapability from "../../requires/PersistenceCapability";

type TaskCompleterUseCaseCreator = (storage: PersistenceCapability) => TaskCompletionCapability;

const TaskCompleterUseCase: TaskCompleterUseCaseCreator = (storage) => {

    return {
        update: (title) => {
            const oldTask: TaskModel | undefined = storage.find().filter(t => t.title === title).pop();

            if(undefined === oldTask) {
                throw new Error('Task not found');
            }

            const newTask = Object.assign({}, oldTask);
            newTask.done = true;

            const updatedTask = storage.patch(oldTask, newTask);

            return updatedTask;
        }
    };
}

export default TaskCompleterUseCase;