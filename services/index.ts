import MemoryTaskService from './MemoryTaskService';

const service = MemoryTaskService();

service.add('Task 1');
service.add('Task 2');
service.add('Task 3');

service.complete('Task 1');
service.complete('Task 3');

const allTasks = service.get();
console.log(allTasks);