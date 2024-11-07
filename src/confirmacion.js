import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import "./home.css";


const Confirmacion = () => {
  const location = useLocation();
  const { codigo, fecha, horario } = location.state;

  return (
    <div>
        <Navbar />
        <div className="text-box">
      <h2>Confirmación de Reserva</h2>
      <p>Gracias por reservar su turno.</p>
      <p><strong>Código de Reserva:</strong> {codigo}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {horario}</p>
      </div>
    </div>

  );
};

export default Confirmacion;
