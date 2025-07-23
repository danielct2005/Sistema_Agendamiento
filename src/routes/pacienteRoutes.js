const express = require("express");
const router = express.Router();
const Paciente = require("../models/Paciente");

// Obtener todos los pacientes
router.get("/", async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear paciente
router.post("/", async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar paciente por ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Paciente.update(req.body, { where: { id } });

    if (actualizado) {
      const pacienteActualizado = await Paciente.findByPk(id);
      res.json(pacienteActualizado);
    } else {
      res.status(404).json({ error: "Paciente no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
