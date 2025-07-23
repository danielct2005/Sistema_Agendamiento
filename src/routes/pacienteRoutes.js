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

// Buscar paciente por RUT
router.get("/buscar/:rut", async (req, res) => {
  const { rut } = req.params;

  try {
    const paciente = await Paciente.findOne({ where: { rut } });

    if (!paciente) {
      return res.status(404).json({ message: "Paciente no encontrado" });
    }

    res.json(paciente);
  } catch (error) {
    console.error("Error buscando paciente por RUT:", error);
    res.status(500).json({ message: "Error interno del servidor" });
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
