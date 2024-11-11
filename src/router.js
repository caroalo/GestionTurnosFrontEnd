import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import App from "./App";
import Servicios from "./servicios";
import Contact from "./contact";
import Confirmacion from "./confirmacion"
import Confirmaciones from "./confirmaciones"

const MainRouter = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitar-turno" element={<App />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/confirmaciones" element={<Confirmaciones />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
