import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import Master from "./pages/master";
import Dash1 from "./pages/dash1";
import Dash2 from "./pages/dash2";

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/master" element={<Master />} />
              <Route path="/dash1" element={<Dash1 />} />
              <Route path="/dash2" element={<Dash2 />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
