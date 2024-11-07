import React from "react";
import Navbar from "./navbar";
import "./home.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      
      <div className="text-box"> 
        <h1>Contacto </h1>
        <h2> Loana Gutierrez - Servicios de mantenimiento doméstico </h2>
      <h3>Teléfono: +54 3564 123456</h3>
      <h3> WhatsApp: +54 3654 456789164 </h3>
      <h3> mail: loanagutierrez@gmail.com</h3>
      <h3> Lugar de atención: 25 de Mayo 1234 </h3>
      </div>
    </div>
  );
};

export default Contact;
