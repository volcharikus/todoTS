import React from 'react';
import {Box, Button, Paper, Typography} from "@mui/material";
import {ITodo} from "../../types/todo";
import useStyles from "./index.styles";

interface TodoItemProps {
    item: ITodo
    onDeleteTask: (id: number) => void
    onStatusChange: (id: number) => void
}

const TodoItem = ({item, onDeleteTask, onStatusChange}: TodoItemProps) => {
    const status = item.status
    // @ts-ignore
    const {classes} = useStyles({status})

    return (
        <Box>
            <Paper className={classes.todoItems} >
                <Typography className={classes.title}>{item.title} </Typography>
                <Typography className={classes.description}> {item.description}</Typography>
                <Box className={classes.buttons}>
                    <Button onClick={(e) => onDeleteTask(item.id)}>X</Button>
                    <Button onClick={(event) => onStatusChange(item.id)}>✓</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default TodoItem;