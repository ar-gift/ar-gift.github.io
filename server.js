const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use('*', (req, res) => res.redirect('/'));

app.listen(3000);
