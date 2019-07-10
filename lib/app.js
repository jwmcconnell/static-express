const express = require('express');
const app = express();

const data = require('./colors.json');

app.use(express.static('./public'));

app.get('/api/v1/colors', (req, res) => {
  res.send(data.colors);
});

module.exports = app;
