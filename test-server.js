const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/test', (req, res) => {
  console.log('Petición recibida en /api/test:', req.body);
  res.json({ message: 'POST a /api/test FUNCIONA' });
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Servidor de prueba corriendo en http://localhost:${PORT}`);
});
