const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente');

// Crear paciente
router.post('/', async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);
    // const paciente = req.body
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los pacientes
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
