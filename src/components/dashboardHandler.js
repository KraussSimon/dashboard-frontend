import React from "react";
import Dashboard1Template from "../templates/Dashboard1";
import Dashboard2Template from "../templates/Dashboard2";
import Dashboard3Template from "../templates/Dashboard3";
import Dashboard4Template from "../templates/Dashboard4";

function DashboardHandler(selectedDashboard) {
    switch (selectedDashboard) {
        case 'Dashboard1':
            return (
                <Dashboard1Template />
            );

        case 'Dashboard2':
            return (
                <Dashboard2Template />
            );

        case 'Dashboard3':
            return (
                <Dashboard3Template />
            );

        case 'Dashboard4':
            return (
                <Dashboard4Template />
            );
    
        default:
            return 'This is the default'
    };
};

export default DashboardHandler;