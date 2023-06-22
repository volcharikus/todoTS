import {Theme} from "@mui/material";
import {makeStyles} from 'tss-react/mui';

export default makeStyles()((theme: Theme) => {
    return {
        todoActions: {
            display: 'flex',
            flexDirection:'column',
            gap:'10px',
        },
        todoActionsInputs: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            alignItems: 'flex-start',
            width: '600px',
        },
    }
})