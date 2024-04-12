import React from "react";
import Box from '@mui/material/Box'

export default function BorderBox(props) {
    return (
        <Box sx={{ bgcolor: 'black', padding: 5 }} border={'1px solid'} borderColor={"lightgrey"} borderRadius={'5px'}>
            {props.children}
        </Box>
    )
}