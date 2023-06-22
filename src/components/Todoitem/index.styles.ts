import {Theme} from "@mui/material";
import {makeStyles} from "tss-react/mui";

interface StylesProps {
    status: boolean
}

// @ts-ignore
export default makeStyles()((theme: Theme, {status}) => {
    return {

        todoItems: {
            display: 'flex',
            width: '600px',
            alignItems: 'center',
            paddingLeft: '15px',
            color: status? 'gray' : 'black',
        },
        title: {
            flexBasis: '30%'
        },
        description: {
            flexBasis: '60%'
        },
        buttons: {
            display: 'flex', flexBasis: '10%',
        },

    }
})