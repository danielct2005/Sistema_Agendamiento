const express = require("express");
const router = express.Router();
const Cita = require("../models/Cita");
const Paciente = require("../models/Paciente");

// Crear cita
router.post("/", async (req, res) => {
  try {
    const cita = await Cita.create(req.body);
    res.status(201).json(cita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las citas con datos del paciente
router.get("/", async (req, res) => {
  try {
    const citas = await Cita.findAll({
      include: {
        model: Paciente,
        attributes: ["id", "nombre", "email"],
      },
    });
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar cita
router.delete("/eliminarcita/:id", async (req, res) => {
  try {
    const id = Number(req.params.id); // 👈 aseguramos número

    console.log("🟢 DELETE /api/eliminarcita/", id);

    const deleted = await Cita.destroy({ where: { id } });

    if (deleted) {
      console.log("✅ Cita eliminada en DB");
      res.json({ message: "Cita eliminada correctamente" });
    } else {
      console.warn("⚠️ No se encontró la cita en DB");
      res.status(404).json({ error: "Cita no encontrada" });
    }
  } catch (error) {
    console.error("❌ Error eliminando cita:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
