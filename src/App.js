import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CoursesChrist from "./components/courses/courses";
import About from "./pages/About";
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
        <Route path="/dujat" element={<CoursesChrist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
