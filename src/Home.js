import React from "react";
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import App from "./App";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";

function Home(){
    return (
        <Router>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
        </Router>
      );
}

export default Home