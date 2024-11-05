// src/App.js
import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [fecha, setFecha] = useState("");
  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  // Función para obtener los horarios disponibles para la fecha seleccionada
  const obtenerHorarios = async (fechaSeleccionada) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/horarios?fecha=${fechaSeleccionada}`);
      console.log("Horarios recibidos:", response.data);
      setHorarios(response.data);
    } catch (error) {
      console.error("Error al obtener los horarios:", error);
    }
  };

  // Maneja el cambio de fecha y solicita los horarios disponibles al backend
  const handleFechaChange = (e) => {
    const fechaSeleccionada = e.target.value;
    setFecha(fechaSeleccionada);
    setHorarioSeleccionado(null); // Reinicia el horario seleccionado
    obtenerHorarios(fechaSeleccionada);
  };

  const handleConfirmar = () => {
    if (!horarioSeleccionado) {
      alert("Por favor, selecciona un horario.");
      return;
    }
    alert(`Turno confirmado para el ${fecha} a las ${horarioSeleccionado}`);
  };

  return (
    <div className="App">
      <header>
        <h1>Solicitud de turno</h1>
      </header>
      <main>
        <form>
          <label htmlFor="fecha">Selecciona una fecha:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={handleFechaChange}
          />

          <div className="button-container">
            {horarios.length > 0 ? (
              horarios.map((horario) => (
                <button
                  key={horario}
                  type="button"
                  className={`available ${horario === horarioSeleccionado ? "selected" : ""}`}
                  onClick={() => setHorarioSeleccionado(horario)}
                >
                  {horario}
                </button>
              ))
            ) : (
              <p>No hay horarios disponibles para esta fecha.</p>
            )}
          </div>

          <button type="button" onClick={handleConfirmar} className="confirm-button">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
};

export default App;
