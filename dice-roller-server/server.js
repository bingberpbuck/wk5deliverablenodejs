const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // or any port of your choice

// Enable CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome to the Dice Roller API!');
});

app.get('/api/random-number', (req, res) => {
  console.log('Received request for random number');
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  res.json({ randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});