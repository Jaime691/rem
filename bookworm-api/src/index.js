const express = require('express');
const path = require('path');
const app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: { global: 'Credenciales inválidas' } });
});

app.listen(8080, () => console.log('running on 8080'));
