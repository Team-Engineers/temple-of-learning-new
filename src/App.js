import "./App.css";
import Signup from "./pages/Signup/Signup";

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import CoursesChrist from "./components/courses/courses";
import About from "./pages/About";
import Cucet from "./pages/Courses/Cucet/Cucet";
import DuJat from "./pages/Courses/DuJat/DuJat";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Contact from "./pages/contacts/Contact";
import IIMRanchi from "./pages/Courses/IIM-Ranchi/IIMRanchi";
import IIMBodhgaya from "./pages/Courses/IIM-Bodhgaya/IIMBodhgaya";

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
        <Route path ="/cucet" element={<Cucet/>}/>
        <Route path="/iim-ranchi" element={<IIMRanchi/>}/>
        <Route path="/iim-bodh-gaya" element={<IIMBodhgaya/>}/>
      </Routes>
    </Router>
  );
}

export default App;
