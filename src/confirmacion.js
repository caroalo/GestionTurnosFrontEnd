import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import "./home.css";


const Confirmacion = () => {
  const location = useLocation();
  const { codigo, fecha, horario } = location.state;

  const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', 
    { day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' });

   // Asegurando que horario es una cadena y luego aplicando padStart 
   const horarioFormateado = String(horario).padStart(5, '0');
  return (
    <div>
        <Navbar />
        <div className="text-box">
      <h2>Confirmación de Reserva</h2>
      <p>Gracias por reservar su turno!</p>
      <p><strong>Código de Reserva:</strong> {codigo}</p>
      <p><strong>Fecha:</strong> {fechaFormateada}</p>
      <p><strong>Hora:</strong> {horarioFormateado}</p>
      </div>
    </div>

  );
};

export default Confirmacion;
