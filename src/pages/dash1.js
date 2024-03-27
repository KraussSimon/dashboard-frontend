import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DashboardHandler from "../components/dashboardHandler";

const socket = io.connect("localhost:3001")

function Dash1() {

    const [messageReceived, setMessageReceived] = useState("Dashboard1");

    useEffect(() => {
        socket.on("update_dash1", (value) => {
            setMessageReceived(value.message);
        });
    });

// Save Dashboard on page reload
// render templates from components and get data from data_dash1

    return (
        <div>
            <h1>This is the first Dashboard:</h1>
            <DashboardHandler selectedDashboard={messageReceived}/>
        </div>
        
    );
};
 
export default Dash1;