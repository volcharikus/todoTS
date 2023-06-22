import React from 'react';
import {Box, ThemeProvider, createTheme} from "@mui/material";
import Todo from "./components/Todo";

function App() {

    const theme = createTheme()

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Todo/>
            </ThemeProvider>
        </Box>
    );
}

export default App;
