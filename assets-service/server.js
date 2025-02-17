require('dotenv').config();
const express = require('express');
const assetsRouter = require('./routes/assetsController');

const app = express();
const PORT = process.env.PORT || 5000;

// Rutas para gestión de assets
app.use('/api/assets', assetsRouter);

// Endpoint de health check
app.get('/health', (req, res) => {
  res.json({ status: 'Assets Service is healthy' });
});

app.listen(PORT, () => {
  console.log(`Assets Service running on port ${PORT}`);
});