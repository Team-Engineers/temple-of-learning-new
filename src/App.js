import "./App.css";
import Signup from "./Pages/Signup/Signup";


import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from './Pages/About';
import Login from "./Pages/Login/Login";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path ="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );


}

export default App;
