import {ITodo} from "../../types/todo";

export default class TasksStorageServices {

    static LOCAL_STORAGE_TASKS = 'tasks';
    static storeTodos(todos: ITodo[]) {
        localStorage.setItem(TasksStorageServices.LOCAL_STORAGE_TASKS, JSON.stringify(todos));
    }
    static getTodos(): ITodo[] | [] {
        const todos = localStorage.getItem(TasksStorageServices.LOCAL_STORAGE_TASKS)
        if (!!todos) {
            return  JSON.parse(todos)
        }
        return []
    }
}
