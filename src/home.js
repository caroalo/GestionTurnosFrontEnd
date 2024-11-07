import React from "react";
import Navbar from "./navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div> 
        <h1>¡Bienvenido a la Gestión de Turnos de la Doctora ....!</h1> 
        <img src="path_to_your_image.jpg" alt="Welcome" className="welcome-image" /> 
      </div>
    </div>
  );
};

export default Home;

