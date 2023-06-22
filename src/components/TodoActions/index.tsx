import useStyles from "./index.styles";
import React, {useEffect, useState} from "react";
import {Box, Button, TextField } from "@mui/material";


interface TodoActionsProps {
    onAddTodo: (title: string, description: string) => void
    onSearchTask: (searchValue: string) => void
}

const TodoActions = ({onAddTodo, onSearchTask}: TodoActionsProps) => {

    const {classes} = useStyles()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [searchValue, setSearchValue] = useState<string>('')
    const [inputValid, setInputValid] = useState<boolean>(true)
    useEffect(() => {
            onSearchTask(searchValue)
        }
        , [searchValue])
    const handleSubmit = () => {
        const isValid = title.length !== 0
        setInputValid( isValid )
            if(isValid) {
                onAddTodo(title, description)
                setTitle('')
                setDescription('')
            }else{
                setInputValid(false)
            }
    }
    const handleKeyDown = (event:  React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }


    return (
        <Box className={classes.todoActions}  >
            <Box className={classes.todoActionsInputs} >
                <TextField onFocus={() => setInputValid(true)} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"
                           helperText={!inputValid && 'Field Title is required'} error={!inputValid}
                           variant="outlined" fullWidth onKeyDown={handleKeyDown}/>
                <TextField value={description} onKeyDown={handleKeyDown} onChange={(e) => setDescription(e.target.value)}
                           placeholder="Description"
                           variant="outlined" fullWidth/>
                <Button onClick={handleSubmit}  variant={"outlined"}  >Submit</Button>
            </Box >
            <TextField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search'/>
        </Box>
    );
};
export default TodoActions;