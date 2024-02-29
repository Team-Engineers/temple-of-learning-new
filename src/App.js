import "./App.css";
import Signup from "./pages/Signup/Signup";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Cucet from "./pages/Courses/Cucet/Cucet";
import DuJat from "./pages/Courses/DuJat/DuJat";
import IIMRanchi from "./pages/Courses/IIM-Ranchi/IIMRanchi";
import Indore from "./pages/Courses/indore/Indore";
import Jammu from "./pages/Courses/jammu/Jammu";
import Rohtak from "./pages/Courses/rohtak/Rohtak";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Contact from "./pages/contacts/Contact";
import IIMBodhgaya from "./pages/Courses/IIM-Bodhgaya/IIMBodhgaya";
import Symbiosis from "./pages/Courses/Symbiosis/Symbiosis";
import NMIMS from "./pages/Courses/nmims/Nmims";

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
        <Route path="/iim-bodhgaya" element={<IIMBodhgaya/>}/>
        <Route path="/iim-rohtak" element={<Rohtak />} />  
        <Route path="/iim-indore" element={<Indore />} />
        <Route path="/iim-jammu" element={<Jammu/>} />
        <Route path= "/symbiosis-management" element={<Symbiosis/>}/>
        <Route path="/nmims-npat" element={<NMIMS />} />
      </Routes>
    </Router>
  );
}

export default App;
