require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const pacienteRoutes = require('./src/routes/pacienteRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Logging básico
app.use((req, res, next) => {
  console.log('➡️ Método:', req.method, 'URL:', req.url);
  next();
});

// Rutas
app.use('/api/pacientes', pacienteRoutes);

// Ruta test para confirmar
app.post('/api/test', (req, res) => {
  console.log('⚡️ Body recibido en /api/test:', req.body);
  res.json({ message: 'POST a /api/test FUNCIONA' });
});

app.get('/', (req, res) => {
  res.send('Servidor backend funcionando correctamente');
});

// Conexion BD y arrancar servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos establecida correctamente');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ Modelos sincronizados con la base de datos');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error en el servidor:', err);
  });

