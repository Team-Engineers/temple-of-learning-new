import "./App.css";
import Signup from "./pages/Signup/Signup";

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CoursesChrist from "./components/courses/courses";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Cucet from "./pages/Courses/Cucet/Cucet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dujat" element={<CoursesChrist />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/courses/cucet" element={<Cucet/>}/>
      </Routes>
    </Router>
  );
}

export default App;
