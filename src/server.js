const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./src/sequelize'); // Asegúrate de que la conexión a la base de datos esté configurada

const app = express();
const PORT = 8080; // Puerto principal

app.use(cors());
app.use(bodyParser.json());

// Ruta para crear un nuevo turno
app.post('/api/turnos', async (req, res) => {
  try {
    const { codigo, fecha, horario } = req.body;
    const nuevoTurno = await sequelize.models.turno.create({ codigo, fecha, horario });
    res.status(201).json(nuevoTurno);
  } catch (error) {
    console.error('Error al crear turno:', error);
    res.status(500).json({ error: 'Error al crear turno' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
