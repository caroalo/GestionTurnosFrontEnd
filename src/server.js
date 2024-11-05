const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3001;

// Configuración de CORS
app.use(cors());

// Conexión a la base de datos
const db = new sqlite3.Database('./path_to_your_database.sqlite');

// Ruta para obtener horarios disponibles
app.get('/horarios', (req, res) => {
  const { fecha } = req.query;

  if (!fecha) {
    return res.status(400).json({ error: 'Se requiere la fecha' });
  }

  const query = `
    SELECT hora FROM horarios
    WHERE fecha = ? AND disponible = 1
    ORDER BY hora;
  `;

  db.all(query, [fecha], (err, rows) => {
    if (err) {
      console.error('Error al consultar horarios:', err);
      return res.status(500).json({ error: 'Error al consultar horarios' });
    }

    const horarios = rows.map(row => row.hora);
    res.json(horarios);
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
