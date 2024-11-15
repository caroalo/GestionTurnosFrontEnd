import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import "./home.css";

const Confirmacion = () => {
  const location = useLocation();
  const { codigo, fecha, horario } = location.state;

  useEffect(() => {
    const guardarConfirmacion = async () => {
      try {
        await axios.post('http://localhost:8080/api/confirmaciones', { codigo, fecha, horario });
        console.log('Confirmación guardada en la base de datos');
      } catch (error) {
        console.error('Error al guardar la confirmación:', error);
      }
    };

    guardarConfirmacion();
  }, [codigo, fecha, horario]);

  
  return (
    <div>
        <Navbar />
        <div className="text-box">
      <h2>Confirmación de Reserva</h2>
      <p>Gracias por reservar su turno!</p>
      <p><strong>Código de Reserva:</strong> {codigo}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {horario}</p>
      </div>
    </div>
  );
};

export default Confirmacion;
