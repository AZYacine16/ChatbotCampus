const express = require('express');
const fs = require('fs');
const app = express();

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'monTokenSecret') {
    next();
  } else {
    res.status(401).send('Accès refusé : Token invalide');
  }
};

const sanitizeInput = (input) => {
  return input.replace(/[<>&'"]/g, ''); // Supprime caractères dangereux
};

app.get('/', authenticate, (req, res) => {
  const logEntry = `[${new Date().toISOString()}] Requête reçue de [ANONYMIZED]\n`;
  fs.appendFile('logs/access.log', logEntry, (err) => {
    if (err) console.error(err);
  });
  res.send('Hello World!');
});

app.get('/echo/:message', authenticate, (req, res) => {
  const userInput = sanitizeInput(req.params.message);
  res.send(`Écho : ${userInput}`);
});

app.listen(5000, () => console.log('Server running on port 5000'));