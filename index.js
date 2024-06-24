require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Anurag!');
});

app.get('/anurag', (req, res) => {
  res.send('HEHEHEHEheheheeh!!!!!!!');
});

app.get('/login', (req, res) => {
  res.send('<h1> HEHEHEHEHOOHOHOHOHOHOOOO </h1>');
});

app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});