import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DashboardHandler from "../components/dashboardHandler";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import MyAppBar from "../components/MyAppBar";

const socket = io.connect("localhost:3001")

export default function Client2() {

    const [messageReceived, setMessageReceived] = useState("");

    useEffect(() => {
        socket.on("update_dash2", (value) => {
            setMessageReceived(value.value);
        });
    });

    // Save Dashboard on page reload
    // render templates from components and get data from data_dash1

    return (
        <>
        <MyAppBar pageName={"Client 2"}/>
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <DashboardHandler selectedDashboard={messageReceived} />
                </Grid>
            </Grid>
        </Box>
        </>
    );
};