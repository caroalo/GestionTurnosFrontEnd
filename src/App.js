import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [fecha, setFecha] = useState("");
  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  // Obtener los horarios disponibles de la base de datos cuando cambia la fecha
  useEffect(() => {
    const obtenerHorarios = async () => {
      try {
        // Simulación de la llamada al backend (actualiza la URL a la que corresponda)
        const response = await axios.get(`http://localhost:3001/horarios?fecha=${fecha}`);
        setHorarios(response.data); // Ajusta esto según el formato de respuesta de tu API
      } catch (error) {
        console.error("Error al obtener los horarios:", error);
      }
    };

    if (fecha) {
      obtenerHorarios();
    }
  }, [fecha]);

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
    setHorarioSeleccionado(null); // Reinicia el horario seleccionado cuando cambia la fecha
  };

  const handleConfirmar = () => {
    if (!horarioSeleccionado) {
      alert("Por favor, selecciona un horario.");
      return;
    }

    // Aquí puedes agregar la lógica para enviar la solicitud al backend
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
