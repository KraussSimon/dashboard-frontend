import React, { useEffect, useState } from "react";
import HumGauge from "../components/HumGauge";
import LineGraph from "../components/LineGraph";
import TempGauge from "../components/TempGauge";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BorderBox from "../components/BorderBox";
import ShowDate from "../components/ShowDate";
import Clock from "../components/Clock";
import Typography from "@mui/material/Typography";
import io from "socket.io-client";
import Config from "../components/config.json"

// Config Datei global

const websocketURL = `${Config.SERVER_URL}:${Config.PORT}`
const socket = io.connect(websocketURL);
// const socket = io.connect("10.102.31.5:3001")
// const socket = io.connect("localhost:3001")
const tempData = {x: [], y: [],}
let tempVal = [];
let timeVal = [];



export default function Dashboard1Template() {

    // const delay = ms => new Promise(res => setTimeout(res, ms));
    // const renderDelay = async () => {
    //     await delay(5000);
    //     console.log("Waited 5s");
    //   };
    

     const [newData, setNewData] = useState("");

    useEffect(() => {
        socket.on("data_dash1", (data) => {
            console.log(data);
            setNewData(data);
        });
    });

    const key=Object.keys(newData)
    console.log(key)
    const val=newData[key[0]]
    // console.log(val);
    

    if(val===undefined){
        console.log("value is undefined")
    }
    else{
        // console.log(val);
        tempVal=val.value;
        timeVal=val.time;
        tempData.x.push(timeVal)
        tempData.y.push(tempVal)
        if(tempData.x.length > 100){

            tempData.x.shift()
            tempData.y.shift()
        }

    }

    // const tempData = { x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [25, 26, 27, 28, 29, 28, 26, 24, 20, 23, 25], }
    // const tempVal = { x: 11, y: 10 }
    // const humVal = 59
    // const humData = { x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [46, 48, 49, 47, 52, 54, 60, 65, 63, 61, 59], }

    return (
        <Box padding={5}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <BorderBox>
                    <Typography variant={"h5"} align="center">Date</Typography>
                        <ShowDate/>
                    </BorderBox>
                </Grid>
                <Grid item xs={6}>
                    <BorderBox>
                    <Typography variant={"h5"} align="center">Time</Typography>
                        <Clock/>
                    </BorderBox>
                </Grid>
                <Grid item xs={8}>
                    <BorderBox>
                        <Typography variant={"h5"} align="center">Room Temperature</Typography>
                        <LineGraph dataset={tempData} axisLabel={'Temperature (°C)'} minValue={0} maxValue={50}/>
                    </BorderBox>
                </Grid>
                <Grid item xs={4}>
                    <BorderBox>
                    <Typography variant={"h5"} align="center">Room Temperature</Typography>
                    {/* <TempGauge dataset={tempVal.y}/> */}
                    <TempGauge dataset={tempVal} />
                    </BorderBox>
                </Grid>
                <Grid item xs={8}>
                    <BorderBox>
                    <Typography variant={"h5"} align="center">Humidity</Typography>
                    {/* <LineGraph dataset={humData} axisLabel={'relative humidity (%)'} minValue={0} maxValue={100}/> */}
                    </BorderBox>
                </Grid>
                <Grid item xs={4}>
                    <BorderBox>
                    <Typography variant={"h5"} align="center">Humidity</Typography>
                    {/* <HumGauge dataset={humVal}/> */}
                    </BorderBox>
                </Grid>
            </Grid>
        </Box>
    );

};