import TaskCollection from '../model/TaskCollection';
import TaskModel from '../model/TaskModel';

type PersistenceCapability = {
    create: (task: TaskModel) => TaskModel,
    find: () => TaskCollection,
    patch: (oldTask: TaskModel, newTask: TaskModel) => TaskModel
};

export default PersistenceCapability;