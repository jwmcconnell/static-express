const express = require('express');
const app = express();

const { colors } = require('./colors.json');

app.use(express.static('./public'));

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

app.get('/api/v1/colors/:color', (req, res) => {
  const color = colors.find(color => color.name === req.params.color) || {};
  res.send(color);
});

module.exports = app;
