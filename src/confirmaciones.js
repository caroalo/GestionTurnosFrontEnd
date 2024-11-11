import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import "./home.css";

/*Muestra la lista de confirmaciones de reservas en la página del Administrador*/
const Confirmaciones = () => {
  const [confirmaciones, setConfirmaciones] = useState([]);

  useEffect(() => {
    const fetchConfirmaciones = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/confirmaciones');
        setConfirmaciones(response.data);
      } catch (error) {
        console.error('Error al obtener las confirmaciones:', error);
      }
    };

    fetchConfirmaciones();
  }, []);

  return (
    <div className="text-box">
      <Navbar />

      <h2>Historial de Reservas</h2>
      <table className="confirmation-table">
        <thead>
          <tr>
            <th>Código de Reserva</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {confirmaciones.map((confirmacion) => (
            <tr key={confirmacion.id}>
              <td>{confirmacion.codigo}</td>
              <td>{new Date(confirmacion.fecha).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}</td>
              <td>{confirmacion.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Confirmaciones;
