import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup/Signup";
import CoursesChrist from "./components/courses/courses";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dujat" element={<CoursesChrist />} />

      </Routes>
    </Router>
  );
}

export default App;
