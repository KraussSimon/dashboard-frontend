import React from "react";
import BorderBox from "../components/BorderBox";
import Clock from "../components/Clock";
import ShowDate from "../components/ShowDate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Dashboard2Template() {

    return (
        <Box padding={5}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <BorderBox>
                        <Typography variant={"h5"} align="center">Date</Typography>
                        <ShowDate />
                    </BorderBox>
                </Grid>
                <Grid item xs={6}>
                    <BorderBox>
                        <Typography variant={"h5"} align="center">Time</Typography>
                        <Clock />
                    </BorderBox>
                </Grid>
            </Grid>
        </Box>

    );

};