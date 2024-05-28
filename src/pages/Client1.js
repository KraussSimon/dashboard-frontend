import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DashboardHandler from "../components/dashboardHandler";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import MyAppBar from "../components/MyAppBar";
import Config from "../components/config.json"

const websocketURL = `${Config.SERVER_URL}:${Config.PORT}`
const socket = io.connect(websocketURL);
// const socket = io.connect("10.102.31.5:3001")
// const socket = io.connect("localhost:3001")
let LineGraphObject = {};
let DonutGraphObject = {};
let LineGraphKeys = [];
let DonutGraphKeys = [];

export default function Client1() {

    const [messageReceived, setMessageReceived] = useState("");

    useEffect(() => {
        socket.on("update_dash1", (value) => {
            console.log(value);
            setMessageReceived(value);
        });
    });

    console.log(messageReceived)
    LineGraphObject=messageReceived["1"]
    console.log(LineGraphObject)
    LineGraphKeys=Object.keys(messageReceived)
    console.log(LineGraphKeys)

   

    // LineGraphObject=messageReceived["Linegraph"]

    // if(LineGraphObject===undefined){
    //     console.log("value is undefined")
    // }
    // else{
    //     LineGraphKeys=Object.keys(LineGraphObject)
    //     console.log(LineGraphKeys)
    // }

    // DonutGraphObject=messageReceived["Donut"]

    // if(DonutGraphObject===undefined){
    //     console.log("value is undefined")
    // }
    // else{
    //     DonutGraphKeys=Object.keys(LineGraphObject)
    //     console.log(DonutGraphKeys)
    // }

    // Save Dashboard on page reload
    // render templates from components and get data from data_dash1

    return (
        <>
        <MyAppBar pageName={"Client 1"}/>
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