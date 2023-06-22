import {Theme} from "@mui/material";
import {makeStyles} from "tss-react/mui";

export default makeStyles()((theme: Theme) => {
    return {

        todoList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '600px',
            gap: '10px'
        },
    }
})