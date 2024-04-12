import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DashboardHandler from "../components/dashboardHandler";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

const socket = io.connect("localhost:3001")

export default function Client1() {

    const [messageReceived, setMessageReceived] = useState("");

    useEffect(() => {
        socket.on("update_dash1", (value) => {
            setMessageReceived(value.value);
        });
    });

    // Save Dashboard on page reload
    // render templates from components and get data from data_dash1

    return (
        <Box>
            <Grid container>
                <Grid item xs={12} padding={5}>
                    <Typography variant="h2" align="center">Client 1</Typography>
                </Grid>
                <Grid item xs={12}>
                    <DashboardHandler selectedDashboard={messageReceived} />
                </Grid>
            </Grid>
        </Box>
    );
};