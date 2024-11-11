import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Navbar from "./navbar";

const App = () => {
  const [fecha, setFecha] = useState("");
  const [horarios, setHorarios] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const navigate = useNavigate();

  const obtenerHorarios = async (fechaSeleccionada) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/horarios?fecha=${fechaSeleccionada}`);
      console.log("Horarios recibidos:", response.data);

      setHorarios(response.data);
    } catch (error) {
      console.error("Error al obtener los horarios:", error);
    }
  };

  const handleFechaChange = (e) => {
    const fechaSeleccionada = e.target.value;
    setFecha(fechaSeleccionada);
    setHorarioSeleccionado(null);
    obtenerHorarios(fechaSeleccionada);
  };

  const handleConfirmar = () => {
    if (!horarioSeleccionado) {
      alert("Por favor, selecciona un horario.");
      return;
    }

    const codigoReserva = Math.random().toString(36).substring(2, 10).toUpperCase();

    // Formatear la fecha a día-mes-año
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    // Encontrar el objeto horario seleccionado por su ID
    const horarioSeleccionadoObj = horarios.find(h => h.id === horarioSeleccionado);

    navigate("/confirmacion", {
      state: { codigo: codigoReserva, fecha: fechaFormateada, horario: horarioSeleccionadoObj.hora }
    });
  };

  return (
    <div className="App">
      <Navbar />
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
                  key={horario.id}
                  type="button"
                  className={`available ${horario.id === horarioSeleccionado ? "selected" : ""}`}
                  onClick={() => setHorarioSeleccionado(horario.id)}
                >
                  {horario.hora}
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
