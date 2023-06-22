import React from 'react';
import {Box} from "@mui/material";
import TodoItem from "../Todoitem";
import {ITodo} from "../../types/todo";
import useStyles from "./index.styles";


interface TodoListProps {
    todos: ITodo[]
    onDeleteTask: (id: number) => void
    onStatusChange: (id: number) => void
}

const TodoList = ({todos, onDeleteTask, onStatusChange}: TodoListProps) => {
    const {classes} = useStyles()

    return (
        <Box className={classes.todoList}>
            {todos.map((item) => (
                    <TodoItem key={item.id} item={item} onDeleteTask={onDeleteTask} onStatusChange={onStatusChange}/>
                )
            )}
        </Box>
    );
};

export default TodoList;