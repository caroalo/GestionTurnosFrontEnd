import React from 'react';
import { Link } from "react-router-dom";
import "./App"
import "./index.css";
import "./navbar.css";

const Navbar = () =>{
  return (
    <nav className="navbar">
      
      <ul>
        <li><Link to="/">🏠Home</Link></li> 
        <li><Link to="/solicitar-turno">📅 Solicitar turno</Link></li> 
        <li><Link to="/contact">📞Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
