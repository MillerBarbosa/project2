
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rotas
require('../routes/nota')(app);

// Middleware de erro
app.use((err, req, res, next) => {
    console.error('Server error. Cause:', err.stack);
    res.status(500).json({ message: 'internal server error' });
});

// Fallback para rotas não encontradas
app.use('*', (req, res) => {
    const message = `${req.originalUrl} not found`;
    console.log(message);
    res.status(404).send(message);
});

module.exports = app;
