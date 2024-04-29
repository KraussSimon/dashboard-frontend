import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MyAppBar from "../components/MyAppBar";

export default function Home() {
    return (
    <>
    <MyAppBar pageName={"Home"}/>
    <Box >
        <Typography variant="h3" align="center" padding={5}>
        Welcome to ITA Augsburg Dashboards
        </Typography>
    </Box>
    </>
    )
}