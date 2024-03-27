import React from "react";
import io from "socket.io-client";
import Select from 'react-select';

const socket = io.connect("192.168.178.66:3001")
const optionDashboards = [
    {value: 'Dashboard1', label: 'Dashboard 1'},
    {value: 'Dashboard2', label: 'Dashboard 2'},
    {value: 'Dashboard3', label: 'Dashboard 3'},
    {value: 'Dashboard4', label: 'Dashboard 4'}
];
 
//neue Subscriber direkt updaten? 

function Master() {

    function setDashboard1(value) {
        socket.emit("dash1_change", {message:value});
        console.log(value);
    }

    function setDashboard2(value) {
        socket.emit("dash2_change", {message:value});
        console.log(value);
    }

    return (
        <div>
            <h1>This is the Master page</h1>
            <label>
            Dashboard 1: <Select 
            options={optionDashboards}
            placeholder='Select Dashboard'
            onChange={(event) => setDashboard1(event.value)}
            />
            </label>
            <hr />
            <label>
            Dashboard 2: <Select 
            options={optionDashboards}
            placeholder='Select Dashboard'
            onChange={(event) => setDashboard2(event.value)}
            />
            </label>
        </div>
    );
};
 
export default Master;