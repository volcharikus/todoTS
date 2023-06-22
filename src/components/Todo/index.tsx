import useStyles from './index.styles'
import React, {useState} from 'react';
import {Box,} from "@mui/material";
import TodoActions from "../TodoActions";
import {ITodo} from '../../types/todo'
import TasksStorageServices from "../services/TasksStorage.services";
import TodoList from "../TodoList";

const Todo = () => {
        const {classes} = useStyles()

        const [todos, setTodos] = useState<ITodo[] | []>(TasksStorageServices.getTodos())
        const handleAddTodo = (title: string, description: string): void => {
            const newList = [...todos, {title: title, description: description, id: Math.random(), status: false}]
            setTodos(newList)
            TasksStorageServices.storeTodos(newList)
        }

        function handleDeleteTask(id: number) {
            let newList = todos.filter(item => item.id != id)
            TasksStorageServices.storeTodos(newList)
            setTodos(newList)
        }

        function handleStatusChange(id: number) {
            const newList = todos.map((item) => {
                if (id === item.id) {
                    if (!item.status) {
                        return {...item, status: true}
                    } else {
                        return {...item, status: false}
                    }
                }
                return item
            })
            TasksStorageServices.storeTodos(newList)
            setTodos(newList)
        }

        function handleSearchTask(searchValue: string) {
            const newList = todos.filter((item) => item.title.includes(searchValue))
        !searchValue.length ? setTodos(TasksStorageServices.getTodos()): setTodos(newList)
        }

        return (
            <Box className={classes.todo}>
                <TodoActions onAddTodo={handleAddTodo} onSearchTask={handleSearchTask}/>
                <TodoList todos={todos} onDeleteTask={handleDeleteTask} onStatusChange={handleStatusChange}/>
            </Box>
        );
    }
;

export default Todo;