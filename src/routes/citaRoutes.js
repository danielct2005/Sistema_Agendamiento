const express = require('express');
const router = express.Router();
const Cita = require('../models/Cita');

// Ruta POST para crear cita
router.post('/', async (req, res) => {
  try {
    const cita = await Cita.create(req.body);
    res.status(201).json(cita);
  } catch (error) {
    console.error('Error al crear cita:', error);
    res.status(400).json({ error: error.message });
  }
});

// Ruta GET para obtener todas las citas
router.get('/', async (req, res) => {
  try {
    const citas = await Cita.findAll();
    res.json(citas);
  } catch (error) {
    console.error('Error al obtener citas:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
