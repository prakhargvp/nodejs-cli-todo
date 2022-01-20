import chalk from 'chalk';
import Conf from 'conf';
const conf = new Conf()

function markDone({ tasks }) {
    let todoList = conf.get('todo-list')
    if(todoList) {
        // loop over the todo list
        todoList = todoList.map((task, index) => {
            
            // check if the user specified the tasks to mark done
            if(tasks) {
                if(tasks.indexOf(index.toString()) != -1) {
                    // mark only specified tasks by user as done
                    task.done = true;
                }
            }else{
                // if the user didn't specify tasks, mark all as done
                task.done = true;
            }
            return task;
        });
        conf.set('todo-list', todoList);
    }
    // show the user a msg
    console.log(
        chalk.green.bold('Tasks have been marked as done successfully.')
    )
}

export default markDone;