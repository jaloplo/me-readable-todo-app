import PersistenceCapability from "../PersistenceCapability";
import TaskCollection from "../../model/TaskCollection";
import TaskModel from "../../model/TaskModel";

type MemoryStorageUseCaseCreator = () => PersistenceCapability;

const MemoryStorageUseCase: MemoryStorageUseCaseCreator = () => {

    let tasks: TaskCollection = [];

    return {
        create: (task) => {
            const newTask: TaskModel = {
                title: task.title,
                done: false
            };

            tasks.push(newTask);
            return newTask;
        },

        find: () => {
            return [...tasks];
        },
        
        patch: (oldTask, newTask) => {
            let taskIndex = tasks.findIndex(t => t.title === oldTask.title);

            const patchedTask = Object.assign({ title: oldTask.title }, newTask);
            
            tasks.splice(taskIndex, 1, patchedTask);

            return patchedTask;
        }
    };
};

export default MemoryStorageUseCase;