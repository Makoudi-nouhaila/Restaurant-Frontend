import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./comp/Login";
import Register from "./comp/Register";
import Resto from "./comp/Resto";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resto" element={<Resto />} />
      </Routes>
    </Router>
  );
}

export default App;