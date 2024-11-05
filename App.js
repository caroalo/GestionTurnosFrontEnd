// App.js
import React from "react";
import TurnoForm from "./TurnoForm";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Gestión de Turnos</h1>
      </header>
      <main>
        <TurnoForm />
      </main>
    </div>
  );
};

export default App;
