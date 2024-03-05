import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Clat from "./pages/Courses/CLAT/Clat";
import {
  default as Christ,
  default as ChristLaw,
} from "./pages/Courses/Christ-law/Christ-law";
import Cucet from "./pages/Courses/Cucet/Cucet";
import DuJat from "./pages/Courses/DuJat/DuJat";
import IIMBodhgaya from "./pages/Courses/IIM-Bodhgaya/IIMBodhgaya";
import IIMRanchi from "./pages/Courses/IIM-Ranchi/IIMRanchi";
import {
  default as Jamia,
  default as JamiaMillia,
} from "./pages/Courses/Jamia-millia/Jamia-millia";
import Nlud from "./pages/Courses/NLUD/Nlud";
import Symbiosis from "./pages/Courses/Symbiosis/Symbiosis";
import SymbiosisLaw from "./pages/Courses/SymbiosisLaw/SymbiosisLaw";
import CHRIST from "./pages/Courses/christ/Christ";
import DELHI from "./pages/Courses/delhi university/Delhi";
import Indore from "./pages/Courses/indore/Indore";
import IPCW from "./pages/Courses/ipcw/Ipcw";
import JAMIA from "./pages/Courses/jamia/Jamia";
import Jammu from "./pages/Courses/jammu/Jammu";
import NCHMCT from "./pages/Courses/nchmct/Nchmct";
import NMIMSLaw from "./pages/Courses/nmims-law/nmimsLaw";
import NMIMS from "./pages/Courses/nmims/Nmims";
import Rohtak from "./pages/Courses/rohtak/Rohtak";
import WGSHA from "./pages/Courses/wgsha/Wgsha";
import XAVIER from "./pages/Courses/xavier/Xavier";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Contact from "./pages/contacts/Contact";
import DU from "./pages/Courses/DU/Du";
import SymbiosisCommerce from "./pages/Courses/symbiosis-commerce/Symbiosis";
import CHRIST_COMMERCE from "./pages/Courses/Christ-commerce/Christ";
import IHM from "./pages/Courses/ihm/Ihm";
import GSIU from "./pages/Courses/gsiu/Gsiu";
import CUNIVERSITY from "./pages/Courses/CHRIST-physcology/Christ";
import SYMB from "./pages/Courses/Symbiosis-communication/Symbiosis";


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
        <Route path="/iim-ranchi" element={<IIMRanchi />} />
        <Route path="/iim-bodhgaya" element={<IIMBodhgaya />} />
        <Route path="/iim-rohtak" element={<Rohtak />} />
        <Route path="/iim-indore" element={<Indore />} />
        <Route path="/iim-jammu" element={<Jammu />} />
        <Route path="/symbiosis-management" element={<Symbiosis />} />
        <Route path="/nmims-npat" element={<NMIMS />} />
        <Route path="/christ-university" element={<CHRIST />} />
        <Route path="/du-ba-hons" element={<DELHI />} />
        <Route path="/st-xaviers-mumbai" element={<XAVIER />} />
        <Route path="/dij-psychology" element={<DU />} />
        <Route path="/symbiosis-college-pune" element={<SymbiosisCommerce />} />
        <Route path="/christ-university-law" element={<ChristLaw />} />
        <Route path="/jamia-millia-islamia-law" element={<JamiaMillia />} />
        <Route path="jamia-millia-university" element={<JAMIA />} />
        <Route path="ipcw" element={<IPCW />} />
        <Route path="/christ-university-bcom" element={<CHRIST_COMMERCE/>} />
        <Route path="/ihm-aurangabad" element={<IHM />} />
        <Route path="/ip-university-hotel-management" element={<GSIU />} />
        <Route path="/nchmct" element={<NCHMCT />} />
        <Route path="/clat" element={<Clat />} />
        <Route path="/national-law-university-delhi" element={<Nlud />} />
        <Route path="/christ-university-law" element={<Christ />} />
        <Route path="/jamia-millia-islamia-law" element={<Jamia />} />
        <Route path="nmims-school-of-law" element={<NMIMSLaw />} />
        <Route path="/wgsha-manipal" element={<WGSHA />} />
        <Route path="symbiosis-law-college" element={<SymbiosisLaw />} />
        <Route path="/christ-university-psychology" element={<CUNIVERSITY />} />
        <Route path="/symbiosis-masscomm" element={<SYMB />} />


      </Routes>
    </Router>
  );
}

export default App;
