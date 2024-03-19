import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("10.102.31.114:3001")

function switchDashboard(selectedDashboard) {
    switch (selectedDashboard) {
        case 'Dashboard1':
            return (
                <h1>
                    This is Dashboard 1
                </h1>
            )

        case 'Dashboard2':
            return 'This is Dashboard 2'

        case 'Dashboard3':
            return 'This is Dashboard 3'

        case 'Dashboard4':
            return 'This is Dashboard 4'
    
        default:
            return 'This is the default'
    }
};
 
function Dash2() {

    const [messageReceived, setMessageReceived] = useState("");

    useEffect(() => {
        socket.on("update_dash2", (value) => {
            setMessageReceived(value.message);
        });
    }, [socket]);
    
    return (
        <div>
            <h1>This is the second Dashboard:</h1>
            {switchDashboard(messageReceived)}
        </div>
    );
};
 
export default Dash2;