const express = require("express");
const router = express.Router();
const Medico = require("../models/Medico");

// POST /medicos - Crear nuevo médico
router.post("/", async (req, res) => {
  try {
    const nuevoMedico = await Medico.create(req.body);
    res.status(201).json(nuevoMedico);
  } catch (error) {
    console.error("Error al crear médico:", error);
    res.status(500).json({ error: "Error al crear médico" });
  }
});

// GET /medicos - Obtener todos los médicos
router.get("/", async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.json(medicos);
  } catch (error) {
    console.error("Error al obtener médicos:", error);
    res.status(500).json({ error: "Error al obtener médicos" });
  }
});

module.exports = router;
