import chalk from 'chalk';
import Conf from 'conf';
const conf = new Conf()


function add(task) {
    let todoList = conf.get('todo-list')
    if(!todoList) {
        todoList = []
    }

    // push the new task to the todo-list
    todoList.push({
        text: task,
        done: false
    });

    conf.set('todo-list', todoList)

    console.log(
        chalk.green.bold('Task has been added successfully.')
    )
}

export default add;