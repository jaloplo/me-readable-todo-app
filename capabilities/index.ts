import MemoryStorageUseCase from "./requires/implements/MemoryStorageUseCase";
import TaskCompleterUseCase from "./provides/implements/TaskCompleterUseCase";
import TaskCreatorUseCase from "./provides/implements/TaskCreatorUseCase";
import TaskRetrieverUseCase from "./provides/implements/TaskRetrieverUseCase";
import TaskRetrieverByTitleUseCase from "./provides/implements/TaskRetrieverByTitleUseCase";


const storage = MemoryStorageUseCase();
const taskCreator = TaskCreatorUseCase(storage);
const taskRetriever = TaskRetrieverUseCase(storage);
const taskRetrieverByTitle = TaskRetrieverByTitleUseCase(storage);
const taskCompleter = TaskCompleterUseCase(storage);

taskCreator.create('Task 1');
taskCreator.create('Task 2');
taskCreator.create('Task 3');

const taskOne = taskRetrieverByTitle.retrieve('Task 1');
const taskThree = taskRetrieverByTitle.retrieve('Task 3');

if(undefined !== taskOne) {
    taskCompleter.update(taskOne);
}
if(undefined !== taskThree) {
    taskCompleter.update(taskThree);
}

const tasks = taskRetriever.retrieve();
console.log(tasks);