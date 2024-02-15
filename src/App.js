import "./App.css";
import Signup from "./Pages/Signup/Signup";

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from './Components/About';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );


}

export default App;
