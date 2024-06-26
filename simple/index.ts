type Task = {
    title: string;
    done: boolean;
};

type Collection = Task[];

const tasks: Collection = [];

const add: (title: string) => Task = (title) => {
    const task = {
        title: title,
        done: false
    };
    
    tasks.push(task);

    return task;
};

const complete: (title: string) => Task = (title) => {
    let taskIndex = 0;
    tasks.forEach((task: Task, index: number) => {
        if(task.title === title) {
            taskIndex = index;
        }
    });
    tasks[taskIndex].done = true;

    return tasks[taskIndex];
};


add('Task 1');
add('Task 2');
add('Task 3');

complete('Task 1');
complete('Task 3');

console.log(tasks);