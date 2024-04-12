import React, { useState } from "react";
import Typography from "@mui/material/Typography";


export default function Clock() {
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (
    <Typography variant="h1" align="center" >
    {ctime}
    </Typography>
)
}