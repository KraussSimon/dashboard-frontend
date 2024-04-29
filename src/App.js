import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Master from "./pages/master";
import Client1 from "./pages/Client1";
import Client2 from "./pages/Client2";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fcfc03',
    },
  },
});

export default function App() {

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Master" element={<Master />} />
            <Route path="/Client1" element={<Client1 />} />
            <Route path="/Client2" element={<Client2 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}