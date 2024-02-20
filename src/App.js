import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Cucet from "./pages/Courses/Cucet/Cucet";
import DuJat from "./pages/Courses/DuJat/DuJat";
import Rohtak from "./pages/Courses/rohtak/Rohtak";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Contact from "./pages/contacts/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dujat" element={<DuJat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cucet" element={<Cucet />} />
        <Route path="/iim-rohtak" element={<Rohtak />} />
      </Routes>
    </Router>
  );
}

export default App;
