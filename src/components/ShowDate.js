import React, { useState } from "react";
import Typography from "@mui/material/Typography";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}.${month}.${year}`;
  }

export default function ShowDate() {

    const [currentDate] = useState(getDate());

    // setInterval(setCurrentDate(getDate));

    return(
        <Typography variant="h1" align="center">
            {currentDate}
        </Typography>
    )
}