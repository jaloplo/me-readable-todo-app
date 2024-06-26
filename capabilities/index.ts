import MemoryStorageUseCase from "./requires/implements/MemoryStorageUseCase";
import TaskCompleterUseCase from "./provides/implements/TaskCompleterUseCase";
import TaskCreatorUseCase from "./provides/implements/TaskCreatorUseCase";
import TaskRetrieverUseCase from "./provides/implements/TaskRetrieverUseCase";


const storage = MemoryStorageUseCase();
const taskCreator = TaskCreatorUseCase(storage);
const taskRetriever = TaskRetrieverUseCase(storage);
const taskCompleter = TaskCompleterUseCase(storage);

taskCreator.create('Task 1');
taskCreator.create('Task 2');
taskCreator.create('Task 3');

taskCompleter.update('Task 1');
taskCompleter.update('Task 3');

const tasks = taskRetriever.retrieve();
console.log(tasks);