import {Theme} from "@mui/material";
import {makeStyles} from 'tss-react/mui';

export default makeStyles()((theme: Theme ) => {
    return {

        todo: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '100px',
            gap: '30px',
            width: '100%',
        },
    }
})