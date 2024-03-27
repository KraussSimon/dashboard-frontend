import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import DashboardHandler from "../components/dashboardHandler";

const socket = io.connect("localhost:3001")
 
function Dash2() {

    const [messageReceived, setMessageReceived] = useState("Dashboard1");

    useEffect(() => {
        socket.on("update_dash2", (value) => {
            setMessageReceived(value.message);
        });
    });
    
    return (
        <div>
            <h1>This is the second Dashboard:</h1>
            <DashboardHandler selectedDashboard={messageReceived}/>
        </div>
    );
};
 
export default Dash2;