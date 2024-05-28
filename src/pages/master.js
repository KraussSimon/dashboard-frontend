import React from "react";
import io from "socket.io-client";
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MyAppBar from "../components/MyAppBar";
import Config from "../components/config.json"

const websocketURL = `${Config.SERVER_URL}:${Config.PORT}`
const socket = io.connect(websocketURL);
// const socket = io.connect("10.102.31.5:3001")
// const socket = io.connect("localhost:3001")


//neue Subscriber direkt updaten? => vmtl. im Backend umzusetzen (Wert speichern - on Connect Wert übermitteln)

export default function Master() {

    function setDashboard1(value) {
        console.log(value);
        socket.emit("dash1_change", { value });
    }

    function setDashboard2(value) {
        socket.emit("dash2_change", { value });
    }

    return (
        <>
        <MyAppBar pageName={"Master Page"}/>
        <Box>
            <Grid container>
                <Grid item xs={5} padding={10}>
                    <Typography variant="h5">Select Dashboard to be displayed on Client 1:</Typography>
                </Grid>
                <Grid item xs={6} padding={10}>
                    <InputLabel id="client1-dashboard-label">Client 1</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            labelId="client1-dashboard-label"
                            id="client1-dashboard"
                            label="Client1"
                            onChange={(event) => {setDashboard1(event.target.value)}}
                        >
                            <MenuItem value={'Dashboard1'}>Dashboard 1</MenuItem>
                            <MenuItem value={'Dashboard2'}>Dashboard 2</MenuItem>
                            <MenuItem value={'Dashboard3'}>Dashboard 3</MenuItem>
                            <MenuItem value={'Dashboard4'}>Dashboard 4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={5} padding={10}>
                    <Typography variant="h5">Select Dashboard to be displayed on Client 2:</Typography>
                </Grid>
                <Grid item xs={6} padding={10}>
                    <InputLabel id="client2-dashboard-label">Client 2</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            labelId="client2-dashboard-label"
                            id="client2-dashboard"
                            label="Client2"
                            onChange={(event) => {setDashboard2(event.target.value)}}
                        >
                            <MenuItem value={'Dashboard1'}>Dashboard 1</MenuItem>
                            <MenuItem value={'Dashboard2'}>Dashboard 2</MenuItem>
                            <MenuItem value={'Dashboard3'}>Dashboard 3</MenuItem>
                            <MenuItem value={'Dashboard4'}>Dashboard 4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};